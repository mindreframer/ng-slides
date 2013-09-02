'use strict';

clientApp.controller('MainCtrl', function($scope, $resource, Huddle, Mongo) {

  $scope.demoHuddleId = '50d9ec9435f44c6860000001';

  $scope.sitemap = [
    {title:'Browse',view:'browse'},
    {title:'Create',view:'create'},
    {title:'Edit',view:'edit/' + $scope.demoHuddleId },
    {title:'Preview',view:'preview/' + $scope.demoHuddleId },
    {title:'Remix',view:'remix/' + $scope.demoHuddleId }
  ];

});
