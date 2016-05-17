'use strict';

angular.module('scrivaniaApp.auth', [
  'scrivaniaApp.constants',
  'scrivaniaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
