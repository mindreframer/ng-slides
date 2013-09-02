'use strict';

clientApp.factory('FileManager', function($resource) {

  // $resource(url[, paramDefaults][, actions]);
  return $resource('http://localhost\\:8000/api/:action/:filename/:huddleId', 
    {
      action: '@action',
      filename: '@filename',
      huddleId: '@huddleId'
    },
    {
      updateFile: {
        method: 'POST',
        params: {action:'updateFile'}
      },
      viewFile: {
        method: 'GET',
        params: {action:'viewFile'},
        isArray: false
      },
      viewFileFromIndividual: {
        method: 'POST',
        params: {action:'viewFileFromIndividual'}
      },
      viewFileFromPresentation: {
        method: 'POST',
        params: {action:'viewFileFromPresentation'}
      }
  });

});