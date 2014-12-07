'use strict';

//Motives service used for motives REST endpoint
angular.module('mean.motives').factory('Motives', ['$resource',
  function($resource) {
    return $resource('motives/:motiveId', {
      motiveId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
