'use strict';

var clientApp = angular.module('clientApp', ['ngResource','ui'])
  .config(['$routeProvider', function($routeProvider,$locationProvider) {
    //$locationProvider.html5mode = true;
    //console.log($locationProvider);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/edit/:huddleId', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/preview/:huddleId', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl'
      })
      .when('/remix/:huddleId', {
        templateUrl: 'views/remix.html',
        controller: 'RemixCtrl'
      })
      .when('/settings/:huddleId', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/create'
      });
  }]);