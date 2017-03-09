'use strict';

/**
 * @ngdoc overview
 * @name applicationsApp
 * @description
 * # applicationsApp
 *
 * Main module of the application.
 */
angular
  .module('ssApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ssDashboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/scripts/dashboard/ssDashboard.html',
        controller: 'ssDashboardController',
        controllerAs: 'ssDashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
