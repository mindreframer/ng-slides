'use strict';

clientApp.filter('matchHuddle', function() {
  return function(input,query) {

    if ( $.isEmptyObject(query) ) {

      // no filter so return everything
      return input;
    
    }else{

      // return filtered list
      return _.filter( input, function(huddle){

        // check against huddle name
        if ( query.huddleName && huddle.huddleName.toLowerCase().indexOf(query.huddleName.toLowerCase()) === -1 ) {
          return false;
        }

        if ( typeof query.techTags === "undefined" || query.techTags === "" ) {

          // no filter on tech so automatic pass
          return true;
        
        }else{

          // sanitize query tech tags
          var techTags = query.techTags.toLowerCase().split(',');
          techTags = _.uniq(techTags);
          
          // sanitize and check against main and supporting tech tags
          var allTags = ( huddle.techMain ? huddle.techMain.toLowerCase() + "," : "" );
          allTags += ( huddle.techSupporting ? huddle.techSupporting.toLowerCase() : "" );
          allTags = ( allTags != "" ? allTags.split(',') : [] );
          allTags = _.uniq(allTags);

          //console.log( techTags, allTags );
          // get a subset of matching tags
          var matchingTags = _.intersection(techTags, allTags);
          //console.log( "matchingTags", matchingTags);

          if ( matchingTags.length === techTags.length ) {
            return true;
          }else{
            return false;
          }

        }

      });
    }
  };
});
