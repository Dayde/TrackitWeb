'use strict';

var loansManagerWeb = angular.module('loansManagerWeb', ['loansManagerWeb.services']);

loansManagerWeb.config(function($routeProvider) {

    $routeProvider.
        when('/', {
            controller: 'ProductsController',
            templateUrl: 'templates/index.html'
        }).
        when('/product/:id', {
            controller: 'ProductController',
            templateUrl: 'templates/product.html'
        }).
        otherwise({redirectTo: '/'});
});

