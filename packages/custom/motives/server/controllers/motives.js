'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Motive = mongoose.model('Motive'),
  _ = require('lodash');


/**
 * Find motive by id
 */
exports.motive = function(req, res, next, id) {
  Motive.load(id, function(err, motive) {
    if (err) return next(err);
    if (!motive) return next(new Error('Failed to load motive ' + id));
    req.motive = motive;
    next();
  });
};

/**
 * Create an motive
 */
exports.create = function(req, res) {
  var motive = new Motive(req.body);
  motive.user = req.user;

  motive.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the motive'
      });
    }
    res.json(motive);

  });
};

/**
 * Update an motive
 */
exports.update = function(req, res) {
  var motive = req.motive;

  motive = _.extend(motive, req.body);

  motive.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the motive'
      });
    }
    res.json(motive);

  });
};

/**
 * Delete an motive
 */
exports.destroy = function(req, res) {
  var motive = req.motive;

  motive.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the motive'
      });
    }
    res.json(motive);

  });
};

/**
 * Show an motive
 */
exports.show = function(req, res) {
  res.json(req.motive);
};

/**
 * List of motives
 */
exports.all = function(req, res) {
  Motive.find().sort('-created').populate('user', 'name username').exec(function(err, motives) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the motives'
      });
    }
    res.json(motives);

  });
};
