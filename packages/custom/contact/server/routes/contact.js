'use strict';

// The Package is past automatically as first parameter
module.exports = function(Contact, app, auth, database) {

  app.get('/contact/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/contact/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/contact/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/contact/example/render', function(req, res, next) {
    Contact.render('index', {
      package: 'contact'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
