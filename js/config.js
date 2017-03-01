angular.module("demoApp")
.config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');

    $stateProvider
        .state('home', {
                url: "/home",
                templateUrl: "./components/home/home.html",
                controller: "HomeController as home"
            }
        )
        .state('add', {
                url: "/add?key?second?attempt",
                templateUrl: "./components/add/add.html",
                controller: "AddController as add"
            }
        )
        .state('subtract', {
                url: "/subtract?key?second?attempt",
                templateUrl: "./components/subtract/subtract.html",
                controller: "SubtractController as sub"
            }
        )
        .state('foo', {
                url: "/foo?second?key?attempt",
                templateUrl: "./components/foo/foo.html",
                controller: "FooController as foo"
            }
        )
        .state('complicated', {
                url: "/complicated?key?second?attempt",
                templateUrl: "./components/complicated/complicated.html",
                controller: "ComplicatedController as comp"
            }
        );

    $urlRouterProvider.otherwise('/home')

});