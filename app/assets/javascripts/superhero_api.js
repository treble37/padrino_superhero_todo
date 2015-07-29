'use strict';

(function(angular) {
  function ApiAction($resource) {
    return $resource('/api/',
      { },
      { api_index: {
        method: "GET",
        isArray: true 
        }
      }
                    );
  }

  function superheroCtr($scope, ApiAction) {
    $scope.superheroSubmit = function() {
     // ApiAction.create({}, { superhero_name: $scope.superheroName, age: $scope.superheroAge });
      angular.forEach($scope.superheroes, function(hero) {
        ApiAction.create({}, { superhero_name: hero.superhero_name, age: hero.age }); 
      });
    };
    var heroes = ApiAction.api_index({}, {});
    $scope.superheroes = [];
    heroes.$promise.then(function(data) {
      angular.forEach(data, function(item) {
        $scope.superheroes.push(item);
      });
    }, function(data) {
      //if error then...
    });

    $scope.appendSuperheroFields = function() {
      var i = $scope.superheroes.length + 1;
      $scope.superheroes.push({"id": i, age: "", superhero_name: "" })
    }

  }

  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', superheroCtr]);
  superheroApp.factory('ApiAction', ['$resource', ApiAction]);
})(angular);
