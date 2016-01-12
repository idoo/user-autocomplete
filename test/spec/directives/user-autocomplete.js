'use strict';

describe('Directive: userAutocomplete', function () {

  // load the directive's module
  beforeEach(module('suggestApp'));

  var element,
      scope,
      $httpBackend;

  beforeEach(inject(function ($rootScope, $injector, $compile) {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('views/partials/user-autocomplete.html').respond(200, '');
    element = angular.element('<div user-autocomplete="comment"></div>');
    element = $compile(element)(scope);
 }));

  it('should show autocomplete results', inject(function () {
    scope.comment = '@';
    scope.$digest();

    var suggest = element.find('span.autocomplete__username');
    expect(suggest.text()).toBeDefined();
  }));

  it('should append username on click', inject(function () {
    scope.comment = '@';
    scope.$digest();
    var suggest = element.find('span.autocomplete__suggestion');
    suggest.triggerHandler('click');
    scope.$digest();

    expect(scope.comment).toBeDefined();
  }));
});
