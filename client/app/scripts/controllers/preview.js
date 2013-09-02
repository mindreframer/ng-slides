'use strict';

clientApp.controller('PreviewCtrl', function($scope, $routeParams, Mongo) {

  console.log("preview loaded");

  console.log("$routeParams.huddleId",$routeParams.huddleId);
  if ( $routeParams.huddleId !== '' ) {
    $scope.huddle = Mongo.getHuddle(
      {
        huddleId: $routeParams.huddleId
      },
      function(){
        console.log("get success", $scope.huddle);
        $scope.huddleUrl = 'http://localhost:8000/huddles/' + $scope.huddle._id;
      },
      function(err){
        console.log("get error", err);
      }
    );
  }else{
    $scope.redirectMsg = 'Go back to <a href="/browse">browsing</a>.';
  }

});
