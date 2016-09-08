(function () {
  'use strict';

  angular
    .module('servicesDemo', ['ngRoute'])
    .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'StudentController',
      templateUrl: '../templates/students.html'
    }).when('/groups', {
      controller: 'GroupController',
      templateUrl: '../templates/points.html'
    })
  }

})();
