'use strict';

clientApp.controller('CreateCtrl', function($scope, $location, Huddle, Mongo) {
  
  $scope.huddleLocal = {};
  $scope.huddleLocal.huddleInstructorContact = "Ozzy"; //TODO: hardcoded, should come from User
  
  $scope.huddleServer = {};

  $scope.showTip = false;
  $scope.creationError = false;

  $scope.focus = function(){
    $scope.showTip = true;
  }

  $scope.blur = function(){
    $scope.showTip = false;
  }

  $scope.isBlank = function(textinput){
    var length = $.trim(textinput).length;
    if ( length === 0 ) {
      return true;
    }else{
      return false;
    }
  }

  $scope.create = function() {

    $scope.creationError = false;
    
    $scope.huddleServer = Mongo.createHuddle(
      {}, //nothing to pass in for URL template
      $scope.huddleLocal, //but pass along huddleName and user info to be saved during creation
      function success() {
        console.log("create success", $scope.huddleServer);
        Huddle.create($scope.huddleServer);        
        //$location.path('settings/' + $scope.huddleServer._id);
        $location.path('edit/' + $scope.huddleServer._id);
      },
      function error (err) {
        //console.log("create failed", err);
        $scope.creationError = true;
      });
  }

});