'use strict';

describe('Service: OutlineManager', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var OutlineManager;
  beforeEach(inject(function(_OutlineManager_) {
    OutlineManager = _OutlineManager_;
  }));

  it('should do something', function () {
    expect(!!OutlineManager).toBe(true);
  });

});
