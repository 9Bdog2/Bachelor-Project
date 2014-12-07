'use strict';

angular.module('mean.workout').controller('WorkoutController', ['$scope', 'Global', 'Workout',
  function($scope, Global, Workout) {
    $scope.global = Global;
    $scope.package = {
      name: 'workout'
    };
  }
]);
