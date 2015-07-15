'use strict';

(function(angular) {
  function ApiCreate($resource) {

  }

  function superheroCtr($scope, ApiCreate) {
    $scope.superheroSubmit = function() {
      console.log("hello");
      ApiCreate.create({}, { superhero_name: $scope.superheroName, age: $scope.superheroAge });
    };
  }
  
  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiCreate', superheroCtr]);
  superheroApp.factory('ApiCreate', ['$resource', ApiCreate]);
})(angular);
