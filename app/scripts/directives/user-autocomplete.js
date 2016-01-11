'use strict';

/**
 * @ngdoc directive
 * @name suggestApp.directive:userAutocomplete
 * @description
 * # user autocomplete directive
 */
angular.module('suggestApp')
  .directive('userAutocomplete', function () {
    function link(scope, element, attrs) {
      var USER_PREFIX = '@';
      /**
       * { function_description }
       *
       * @method     _defaultValues
       */
      var _defaultValues = function() {
        scope.showAutoComplete = null;
        scope.searchStr = null;
      };

      /**
       * { Complete user name into input }
       *
       * @method     completeUser
       * @param      {Object}  user    { User object }
       */
      scope.completeUser = function (user) {
        var lastIndex = scope.comment.lastIndexOf(' ');
        var space = (lastIndex > -1) ? ' ' : '';
        scope.comment = scope.comment.substring(0, lastIndex) + space;
        scope.comment += '@' + user.username + ' ';
      };

      /**
       *  Watch USER_PREFIX for perform search into users
       */
      scope.$watch(attrs.userAutocomplete, function (value) {
        if (typeof value === 'undefined') {
          return;
        }

        scope.showAutoComplete = value.slice(-1) !== ' ';

        if (scope.showAutoComplete && value.indexOf(USER_PREFIX) > -1) {
          scope.searchStr = value.split(USER_PREFIX).pop();
        } else {
          _defaultValues();
        }
      });

      _defaultValues();
    }

    return {
      templateUrl: 'views/partials/user-autocomplete.html',
      restrict: 'A',
      link: link,
      replace: true
    };
  });
