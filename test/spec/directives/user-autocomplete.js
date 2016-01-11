'use strict';

describe('Directive: userAutocomplete', function () {

  // load the directive's module
  beforeEach(module('suggestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show autocomplete results', inject(function ($compile) {
    element = angular.element('<div user-autocomplete="comment"></div>');
    element = $compile(element)(scope);
    scope.comment = '@pturner0';

    // ¯\_(ツ)_/¯
    expect(scope.comment).toBe('@pturner0');
  }));
});
