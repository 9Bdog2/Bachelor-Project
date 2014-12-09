'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  nodemailer = require('nodemailer'),
  Message = mongoose.model('Message'),
  _ = require('lodash');


/**
 * Find message by id
 */
exports.message = function(req, res, next, id) {
  Message.load(id, function(err, message) {
    if (err) return next(err);
    if (!message) return next(new Error('Failed to load message ' + id));
    req.message = message;
    next();
  });
};

/**
 * Create an message
 */
exports.create = function(req, res) {
  var message = new Message(req.body);
  message.user = req.user;

   var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'office.hittchallenge@gmail.com',
        pass: 'Hitt@rocks!'
    }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: message.title, // sender address
        to: 'office.hittchallenge@gmail.com', // list of receivers
        subject: message.title, // Subject line
        text: message.content, // plaintext body
        html: message.content // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });

  message.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the message'
      });
    }
    res.json(message);

  });
};

/**
 * Update an message
 */
exports.update = function(req, res) {
  var message = req.message;

  message = _.extend(message, req.body);

  message.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the message'
      });
    }
    res.json(message);

  });
};

/**
 * Delete an message
 */
exports.destroy = function(req, res) {
  var message = req.message;

  message.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the message'
      });
    }
    res.json(message);

  });
};

/**
 * Show an message
 */
exports.show = function(req, res) {
  res.json(req.message);
};

/**
 * List of Messages
 */
exports.all = function(req, res) {
  Message.find().sort('-created').populate('user', 'name username').exec(function(err, messages) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the messages'
      });
    }
    res.json(messages);

  });
};
