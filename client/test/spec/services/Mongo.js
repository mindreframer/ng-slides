'use strict';

describe('Service: Mongo', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Mongo;
  beforeEach(inject(function(_Mongo_) {
    Mongo = _Mongo_;
  }));

  it('should do something', function () {
    expect(!!Mongo).toBe(true);
  });

});
