'use strict';

(function(angular) {
  function ApiAction($resource) {
    //return $resource('/admin/update_clinicaltrialgov_inclusion_list', 
    //  { },
    //  { update_inclusion_list: {
    //    method: "POST",
    //    isArray: false 
    //    }
    //  }
    //);
  }

  function superheroCtr($scope, ApiAction) {
    $scope.superheroSubmit = function() {
      console.log("hello");
     // ApiAction.create({}, { superhero_name: $scope.superheroName, age: $scope.superheroAge });
    };
    $scope.superheroes = gon.superheroes;
    console.log($scope.superheroes);
  }
  
  var superheroApp = angular.module('superheroApp', ['ngResource']);
  superheroApp.controller('superheroCtr', ['$scope', 'ApiAction', superheroCtr]);
  superheroApp.factory('ApiAction', ['$resource', ApiAction]);
})(angular);
