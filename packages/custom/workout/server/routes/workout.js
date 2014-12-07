'use strict';

// The Package is past automatically as first parameter
module.exports = function(Workout, app, auth, database) {

  app.get('/workout', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/workout/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/workout/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/workout/example/render', function(req, res, next) {
    Workout.render('index', {
      package: 'workout'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
