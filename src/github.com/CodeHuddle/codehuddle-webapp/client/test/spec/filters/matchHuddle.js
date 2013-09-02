'use strict';

describe('Filter: matchHuddle', function() {

  // load the filter's module
  beforeEach(module('clientApp'));

  // initialize a new instance of the filter before each test
  var matchHuddle;
  beforeEach(inject(function($filter) {
    matchHuddle = $filter('matchHuddle');
  }));

  it('should return the input prefixed with "matchHuddle filter:"', function() {
    var text = 'angularjs';
    expect(matchHuddle(text)).toBe('matchHuddle filter: ' + text);
  });

});
