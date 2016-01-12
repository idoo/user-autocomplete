'use strict';

describe('Service: dataResource', function () {

  // load the service's module
  beforeEach(module('suggestApp'));

  // instantiate service
  var dataResource;
  beforeEach(inject(function (_dataResource_) {
    dataResource = _dataResource_;
  }));

  it('should return not empty array', function () {
    expect(dataResource.length).toBe(200);
  });

});
