'use strict';

angular.module('vjhipsterApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
