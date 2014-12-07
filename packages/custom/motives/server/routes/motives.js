'use strict';

var motives = require('../controllers/motives');

// Motive authorization helpers
// var hasAuthorization = function(req, res, next) {
//   if (!req.user.isAdmin && req.motive.user.id !== req.user.id) {
//     return res.send(401, 'User is not authorized');
//   }
//   next();
// };

module.exports = function(Motives, app, auth) {

  app.route('/motives')
    .get(motives.all)
    .post(auth.requiresLogin, motives.create);
  app.route('/motives/:motiveId')
    .get(motives.show)
    .put(auth.requiresLogin, motives.update)
    .delete(auth.requiresLogin, motives.destroy);

  // Finish with setting up the motiveId param
  app.param('motiveId', motives.motive);
};
