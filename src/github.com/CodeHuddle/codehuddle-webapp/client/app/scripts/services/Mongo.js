'use strict';

clientApp.factory('Mongo', function($resource) {

  // $resource(url[, paramDefaults][, actions]);
  return $resource('http://localhost\\:8000/api/:action/:huddleId', 
    {
      action: '@action',
      huddleId: '@huddleId'
    },
    {
      listAllHuddles: {
        method: 'GET',
        params: {action:'listAllHuddles'},
        isArray: true
      },
      createHuddle: {
        method: 'POST',
        params: {action:'createHuddle'}
      },
      getHuddle: {
        method: 'POST',
        params: {action:'getHuddle'}
      },
      updateHuddle: {
        method: 'POST',
        params: {action:'updateHuddle'}
      },
      generateHuddle: {
        method: 'GET',
        params: {action:'generateHuddle'}
      },
      cherryPick: {
        method: 'POST',
        params: {action:'cherryPick'}
      }
  });

});

//huddles/:huddleId