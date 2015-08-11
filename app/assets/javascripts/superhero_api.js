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
        method: "PUT",
        isArray: true
        },
        create: {
          method: "POST",
          isArray: true
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
      var hero = ApiAction.get({ id: id }, function() {
      });
      var single_hero;
      hero.$promise.then(function(data) {
        angular.forEach(data, function(item) {
          single_hero = item;
          ApiAction.update(single_hero, {});
        });
      }, function(data) {
        //if error then...
      });
    }

    $scope.createSuperhero = function(name, age) {
      heroes = ApiAction.save({name: name, age: age}, function(data) {
      });
    }

  }

  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', superheroCtr]);
  superheroApp.factory('ApiAction', ['$resource', ApiAction]);

})(angular);
