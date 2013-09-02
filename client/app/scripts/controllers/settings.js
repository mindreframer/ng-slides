'use strict';

clientApp.controller('SettingsCtrl', function($scope, $routeParams, Huddle, Mongo) {

  $scope.huddleLocal = Huddle.get(); // Huddle obj to keep around mostly for _id
  $scope.huddleSettings = {}; // clean version of Huddle obj to post to backend
  $scope.huddleServer = {};
  $scope.isEditingName = false;

  if($routeParams.huddleId !== '') {

    // check if this is a brand new Huddle (user is coming from the create page)
    if($scope.huddleLocal._id === $routeParams.huddleId) {

      // yes, so copy the properties over to huddleSettings to use for data binding
      copyHuddleSettings($scope.huddleLocal, $scope.huddleSettings);

    } else {

      // no, so query the db for the latest settings
      $scope.huddleServer = Mongo.getHuddle({
        huddleId: $routeParams.huddleId
      }, function() {
        console.log('get success', $scope.huddleServer);
        Huddle.update($scope.huddleServer);
        copyHuddleSettings($scope.huddleServer, $scope.huddleSettings);
        $scope.init();
      }, function(err) {
        console.log('get error', err);
      });

    }

  } else {
    $scope.showRedirectMsg = true;
  }

  /* ************** */

  function copyHuddleSettings(fromHuddleObj, toHuddleObj) {
    var properties = ['huddleName', 'techMain', 'techSupporting', 'experience', 'duration'];
    _.each(properties, function(prop) {
      toHuddleObj[prop] = fromHuddleObj[prop];
    });
  }

  $scope.editName = function() {
    $scope.isEditingName = true;
    
    // need to delay focus because text input is not available yet
    setTimeout(function(){
      $('#huddleNameEditTextInput').focus();
    }, 200);
  };

  $scope.finishEditName = function() {
    if($scope.huddleSettings.huddleName !== $scope.huddleLocal.huddleName) {
      $scope.save();
    }
    $scope.isEditingName = false;
  };

  $scope.revertHuddleRename = function() {
    $scope.huddleSettings.huddleName = $scope.huddleLocal.huddleName;
    $scope.finishEditName();
  };

  $scope.isBlank = function(textinput) {
    var length = $.trim(textinput).length;
    if(length === 0) {
      return true;
    } else {
      return false;
    }
  };

  $scope.save = function() {

    // check for changes to avoid unnecessarily saving to db
    var noChange = true;
    for(var prop in $scope.huddleSettings) {
      if($scope.huddleSettings[prop] != $scope.huddleLocal[prop]) { //note, not strict due to numbers
        noChange = false;
        break;
      }
    }
    if(noChange) return;

    // first update() param is Huddle ID used in API path construction
    $scope.huddleServer = Mongo.updateHuddle({
      huddleId: $scope.huddleLocal._id
    }, $scope.huddleSettings, function success() {
      console.log('update success', $scope.huddleServer);
      Huddle.update($scope.huddleServer);
      $scope.huddleLocal = $scope.huddleServer; //save to Huddle service
    }, function error(err) {
      console.log('update failed', err);
      $scope.updateError = true;
    });
  };

  $scope.init = function() {

    $('#tech-main-tags').val($scope.huddleSettings.techMain);
    $('#tech-main-tags').tagsInput({ 
      autocomplete_url: '/technologies.html', //TODO: not working?
      defaultText: '',
      onAddTag: $scope.updateTechTag,
      onRemoveTag: $scope.updateTechTag,
      width: '100%', 
      height: '16px'
    });

    $('#tech-supporting-tags').val($scope.huddleSettings.techSupporting);
    $('#tech-supporting-tags').tagsInput({ 
      autocomplete_url: '/technologies.html', //TODO: not working?
      defaultText: '',
      onAddTag: $scope.updateTechTag,
      onRemoveTag: $scope.updateTechTag,
      width: '100%', 
      height: '16px'
    });

  }

  $scope.updateTechTag = function() {
    $scope.huddleSettings.techMain = $('#tech-main-tags').val();
    $scope.huddleSettings.techSupporting = $('#tech-supporting-tags').val();
    $scope.save();
  }

});