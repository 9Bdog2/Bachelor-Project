'use strict';

angular.module('mean.workout').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('workout 7-min', {
      url: '/workout/7-min-workout',
      templateUrl: 'workout/views/7-min.html'
    });
  }
]);
