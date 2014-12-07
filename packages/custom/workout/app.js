'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Workout = new Module('workout');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Workout.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Workout.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Workout.menus.add({
    title: 'workout example page',
    link: 'workout example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Workout.aggregateAsset('css', 'workout.css');

  Workout.aggregateAsset('js', 'exercise.js');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Workout.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Workout.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Workout.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Workout;
});
