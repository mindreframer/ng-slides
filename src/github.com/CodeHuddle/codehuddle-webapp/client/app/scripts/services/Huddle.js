'use strict';

clientApp.factory('Huddle', function($resource, Mongo) {

  var _huddle = {};

  // Public API here
  return {
    get: function(){
      return _huddle;
    },
    create: function(huddleObj){
      _huddle = {};
      for (var prop in huddleObj) {
        _huddle[prop] = huddleObj[prop];
      }
    },
    update: function(huddleObj){
      for (var prop in huddleObj) {
        _huddle[prop] = huddleObj[prop];
      }
    },
    getDummyData: function(){
      // for testing or when Mongo is not available
      var id = ( typeof _huddle._id !== 'undefined' ? _huddle._id : 123 );
      var name = ( typeof _huddle.huddleName !== 'undefined' ? _huddle.huddleName : "Dummy Data Huddle" );
      _huddle = { 
        huddleId: id,
        huddleName: name,
        techMain: "main tech",
        techSupporting: "supporting tech",
        experience: 1,
        duration: 3 
      }
      return _huddle;
    }
  };

});