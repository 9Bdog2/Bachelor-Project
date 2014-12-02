'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Contact = new Module('contact');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Contact.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Contact.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Contact.menus.add({
    title: 'contact example page',
    link: 'contact example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Contact.aggregateAsset('css', 'contact.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Contact.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Contact.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Contact.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Contact;
});
