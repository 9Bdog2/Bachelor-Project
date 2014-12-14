'use strict';

angular.module('mean.profile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('profile page', {
      url: '/profile',
      templateUrl: 'profile/views/index.html'
    });
  }
]);
