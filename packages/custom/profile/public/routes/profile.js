'use strict';

angular.module('mean.profile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('profile example page', {
      url: '/profile/example',
      templateUrl: 'profile/views/index.html'
    });
  }
]);
