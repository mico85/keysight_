angular.module("demoApp")
    .factory('routeService',function () {
    var user = {};

    user.routeStatus = 0;

    user.lastRoute = "";

    return user;
    });