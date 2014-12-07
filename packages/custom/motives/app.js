'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Motives = new Module('motives');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Motives.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Motives.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Motives.menus.add({
    'roles': ['authenticated'],
    'title': 'Motives',
    'link': 'all motives'
  });
  Motives.menus.add({
    'roles': ['authenticated'],
    'title': 'Create New Motive',
    'link': 'create motive'
  });

  //Motives.aggregateAsset('js','/packages/system/public/services/menus.js', {group:'footer', absolute:true, weight:-9999});
  //Motives.aggregateAsset('js', 'test.js', {group: 'footer', weight: -1});

  /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Motives.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Motives.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settings
    Motives.settings(function (err, settings) {
      //you now have the settings object
    });
    */
  Motives.aggregateAsset('css', 'motives.css');

  return Motives;
});
