'use strict';

clientApp.controller('RemixCtrl', function($scope, $routeParams, Mongo) {

  console.log("$routeParams.huddleId",$routeParams.huddleId);
  if ( $routeParams.huddleId !== '' ) {
    $scope.huddle = Mongo.getHuddle(
      {
        huddleId: $routeParams.huddleId
      },
      function(){
        console.log("get success", $scope.huddle);
      },
      function(err){
        console.log("get error", err);
      }
    );
  }else{
    $scope.redirectMsg = 'Go back to <a href="/browse">browsing</a>.';
  }

  $scope.remixClicked = function() {
    
  }

});
