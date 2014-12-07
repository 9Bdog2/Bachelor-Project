'use strict';

angular.module('mean.workout').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('workout example page', {
      url: '/workout/example',
      templateUrl: 'workout/views/index.html'
    });
  }
]);
