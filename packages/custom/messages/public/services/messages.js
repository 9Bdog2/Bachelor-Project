'use strict';

//Messages service used for messages REST endpoint
angular.module('mean.messages').factory('Messages', ['$resource',
  function($resource) {
    return $resource('messages/:messageId', {
      messageId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
