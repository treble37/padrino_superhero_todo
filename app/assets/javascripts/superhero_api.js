'use strict';

(function(angular) {

  function ApiAction($resource) {
    return $resource('/api/:id',
      { id: "@id" },
      { 
        get: {
          method: "GET",
          isArray: true
        },
        update: {
        url: '/api/update',
        method: "PUT",
        isArray: true
        },
        create: {
          url: '/api/create',
          method: "POST",
          isArray: false 
        },
        delete: {
          url: '/api/delete',
          method: "DELETE",
          isArray: false
        }
      });

  }


  function superheroCtr($scope, ApiAction) {
    $scope.superheroSubmit = function() {
      angular.forEach($scope.superheroes, function(hero) {
      });
    };
    var heroes = ApiAction.query();
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

    $scope.updateSuperhero = function(id, name, age) {
      var single_hero = {id: id, superhero_name: name, age: age};
      ApiAction.update(single_hero, {});
    }

    $scope.createSuperhero = function(name, age) {
      heroes = ApiAction.create({superhero_name: name, age: age}, function(data) {
      });
    }

    $scope.deleteSuperhero = function(id) {
      heroes = ApiAction.delete({id: id}, {});
    }

  }

  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', superheroCtr]);
  superheroApp.factory('ApiAction', ['$resource', ApiAction]);

})(angular);
