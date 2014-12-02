'use strict';

angular.module('mean.contact').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('contact example page', {
      url: '/contact/example',
      templateUrl: 'contact/views/index.html'
    });
  }
]);
