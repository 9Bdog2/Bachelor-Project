'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Motivational = new Module('motivational');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Motivational.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Motivational.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Motivational.menus.add({
    title: 'motivational example page',
    link: 'motivational example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Motivational.aggregateAsset('css', 'motivational.css');



  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Motivational.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Motivational.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Motivational.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Motivational;
});
