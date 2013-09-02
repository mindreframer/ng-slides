'use strict';

describe('Service: huddle', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var huddle;
  beforeEach(inject(function(_huddle_) {
    huddle = _huddle_;
  }));

  it('should do something', function () {
    expect(!!huddle).toBe(true);
  });

});
