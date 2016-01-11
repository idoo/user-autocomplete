'use strict';

/**
 * @ngdoc function
 * @name suggestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestApp
 */
angular.module('suggestApp')
  .controller('MainCtrl', function ($scope, dataResource) {
    $scope.dataset = dataResource;
  });
