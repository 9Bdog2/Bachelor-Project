'use strict';

//Setting up route
angular.module('mean.motives').config(['$stateProvider',
  function($stateProvider) {
    // Check if the user is connected
    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') $timeout(deferred.resolve);

        // Not Authenticated
        else {
          $timeout(deferred.reject);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };

    // states for my app
    $stateProvider
      .state('all motives', {
        url: '/motives',
        templateUrl: 'motives/views/list.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('create motive', {
        url: '/motives/create',
        templateUrl: 'motives/views/create.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('edit motive', {
        url: '/motives/:motiveId/edit',
        templateUrl: 'motives/views/edit.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('motive by id', {
        url: '/motives/:motiveId',
        templateUrl: 'motives/views/view.html',
        resolve: {
          loggedin: checkLoggedin
        }
      });
  }
]);
