'use strict';

describe('Directive: ngBlur', function() {
  beforeEach(module('clientApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<ng-blur></ng-blur>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the ngBlur directive');
  }));
});
