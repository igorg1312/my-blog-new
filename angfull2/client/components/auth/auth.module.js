'use strict';

angular.module('yourAppNameApp.auth', [
  'yourAppNameApp.constants',
  'yourAppNameApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
