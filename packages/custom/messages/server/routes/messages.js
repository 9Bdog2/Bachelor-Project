'use strict';

var messages = require('../controllers/messages');

// Message authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.message.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Messages, app, auth) {

  app.route('/messages')
    .get(messages.all)
    .post(messages.create);
  app.route('/messages/:messageId')
    .get(messages.show)
    .put(auth.requiresLogin, hasAuthorization, messages.update)
    .delete(auth.requiresLogin, hasAuthorization, messages.destroy);

  // Finish with setting up the messageId param
  app.param('messageId', messages.message);
};
