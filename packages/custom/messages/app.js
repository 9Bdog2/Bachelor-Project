'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Messages = new Module('messages');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Messages.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Messages.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Messages.menus.add({
    'roles': ['authenticated'],
    'title': 'Messages',
    'link': 'all messages'
  });
  Messages.menus.add({
    'roles': ['authenticated'],
    'title': 'Create New Message',
    'link': 'create message'
  });

  //Messages.aggregateAsset('js','/packages/system/public/services/menus.js', {group:'footer', absolute:true, weight:-9999});
  //Messages.aggregateAsset('js', 'test.js', {group: 'footer', weight: -1});

  /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Messages.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Messages.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settings
    Messages.settings(function (err, settings) {
      //you now have the settings object
    });
    */
  Messages.aggregateAsset('css', 'messages.css');

  return Messages;
});
