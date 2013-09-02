'use strict';

/* Example usuage:

On an HTML input field: 
<input type="text" ng-blur="blur()" />

In your Controller:
myApp.controller('MyCtrl', function($scope) {

  $scope.blur = function(){
    // do something
  }

});

*/

clientApp.directive('ngBlur', function() {
  return {
    link: function linkFn(scope, element, attrs) {
      element.bind('blur', function () {
        scope.$apply(attrs.ngBlur);
      });
    }
  };
});
