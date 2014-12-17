'use strict';

angular.module('mean.messages').controller('MessagesController', ['$scope', '$stateParams', '$location', 'Global', 'Messages',
  function($scope, $stateParams, $location, Global, Messages) {
    $scope.global = Global;

    $scope.hasAuthorization = function(message) {
      if (!message || !message.user) return false;
      return $scope.global.isAdmin || message.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var message = new Messages({
          title: this.title,
          content: this.content
        });
        message.$save(function(response) {
          $location.path('/');
        });

        this.title = '';
        this.content = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(message) {
      if (message) {
        message.$remove();

        for (var i in $scope.messages) {
          if ($scope.messages[i] === message) {
            $scope.messages.splice(i, 1);
          }
        }
      } else {
        $scope.message.$remove(function(response) {
          $location.path('messages');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var message = $scope.message;
        if (!message.updated) {
          message.updated = [];
        }
        message.updated.push(new Date().getTime());

        message.$update(function() {
          $location.path('messages/' + message._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Messages.query(function(messages) {
        $scope.messages = messages;
      });
    };

    $scope.findOne = function() {
      Messages.get({
        messageId: $stateParams.messageId
      }, function(message) {
        $scope.message = message;
      });
    };
  }
]);
