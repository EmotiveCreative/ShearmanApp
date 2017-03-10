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
  .module('ShearmanApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ssDashboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<ss-dashboard></ss-dashboard>',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
