'use strict';

angular.module('mean.motivational').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('motivational example page', {
      url: '/motivational/example',
      templateUrl: 'motivational/views/index.html'
    });
  }
]);
