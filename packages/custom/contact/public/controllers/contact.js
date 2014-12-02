'use strict';

angular.module('mean.contact').controller('ContactController', ['$scope', 'Global', 'Contact',
  function($scope, Global, Contact) {
    $scope.global = Global;
    $scope.package = {
      name: 'contact'
    };
  }
]);
