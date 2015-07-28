'use strict';

(function(angular) {
  function ApiAction($resource) {
    return $resource('/api/',
      { },
      { api_index: {
        method: "GET",
        isArray: false 
        }
      }
                    );
  }

  function superheroCtr($scope, ApiAction) {
    $scope.superheroSubmit = function() {
     // ApiAction.create({}, { superhero_name: $scope.superheroName, age: $scope.superheroAge });
    };
    $scope.superheroes = ApiAction.api_index({}, {});
    $scope.superheroes.$promise.then(function(data) {
      console.log(data);
    }, function(data) {
    });
  }

  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', superheroCtr]);
  superheroApp.factory('ApiAction', ['$resource', ApiAction]);
})(angular);
