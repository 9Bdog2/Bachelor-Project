'use strict';

angular.module('mean.motivational').controller('MotivationalController', ['$scope', 'Global', 'Motivational',
  function($scope, Global, Motivational) {
    $scope.global = Global;
    $scope.package = {
      name: 'motivational'
    };
  }
]);
