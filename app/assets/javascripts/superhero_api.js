'use strict';

(function(angular) {

  function ApiAction($resource, ResourceParameters) {
    return $resource(ResourceParameters.route,
      { },
      { api_index: {
        method: ResourceParameters.method,
        isArray: true 
        }
      });

    return $resource(ResourceParameters.route,
      { },
      { create: {
        method: ResourceParameters.method,
        isArray: true
        }
      }
                    );
  }

  function ResourceParameters() {
    var factory = {};
    factory.method = '';
    factory.route = '';
    factory.SetMethod = function(method) {
      factory.method = method;
    }
    factory.SetRoute = function(route) {
      factory.route = route;
    }
    return factory;
  }

  function superheroCtr($scope, ApiAction, ResourceParameters) {
    $scope.superheroSubmit = function() {
     // ApiAction.create({}, { superhero_name: $scope.superheroName, age: $scope.superheroAge });
      angular.forEach($scope.superheroes, function(hero) {
  //      ApiAction.create({}, { superhero_name: hero.superhero_name, age: hero.age }); 
      });
    };
    var heroesResources = ResourceParameters;
    heroesResources.SetRoute('/api/');
    heroesResources.SetMethod("GET");
    console.log(heroesResources.method);
    var heroes = ApiAction.api_index({}, heroesResources);
    
  /*  $scope.superheroes = [];
    heroes.$promise.then(function(data) {
      angular.forEach(data, function(item) {
        $scope.superheroes.push(item);
      });
    }, function(data) {
      //if error then...
    });
*/
    $scope.appendSuperheroFields = function() {
      var i = $scope.superheroes.length + 1;
      $scope.superheroes.push({"id": i, age: "", superhero_name: "" })
    }

  }

  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', 'ResourceParameters', superheroCtr]);
  superheroApp.factory('ResourceParameters', [ ResourceParameters]);
  superheroApp.factory('ApiAction', ['$resource', 'ResourceParameters', ApiAction]);

})(angular);
