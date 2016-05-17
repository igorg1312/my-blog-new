(function(angular, undefined) {
'use strict';

angular.module('yourAppNameApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);