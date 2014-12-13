'use strict';

angular.module('mean.motives').controller('MotivesController', ['$scope', '$stateParams', '$location', 'Global', 'Motives',
  function($scope, $stateParams, $location, Global, Motives) {
    $scope.global = Global;

    $scope.create = function(isValid) {
      if (isValid) {
        var motive = new Motives({
          content: this.content
        });
        motive.$save(function(response) {
          $location.path('motives');
        });

        this.content = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(motive) {
      if (motive) {
        motive.$remove();

        for (var i in $scope.motives) {
          if ($scope.motives[i] === motive) {
            $scope.motives.splice(i, 1);
          }
        }
      } else {
        $scope.motive.$remove(function(response) {
          $location.path('motives');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var motive = $scope.motive;
        if (!motive.updated) {
          motive.updated = [];
        }
        motive.updated.push(new Date().getTime());

        motive.$update(function() {
          $location.path('motives/' + motive._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Motives.query(function(motives) {
        $scope.motives = motives;
      });
    };

    $scope.findOne = function() {
      Motives.get({
        motiveId: $stateParams.motiveId
      }, function(motive) {
        $scope.motive = motive;
      });
    };
  }
]);
