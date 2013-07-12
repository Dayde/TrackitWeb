'use strict';

var loansManagerWebServices = angular.module('loansManagerWeb.services', ['ngResource']);
loansManagerWebServices.factory('ProductsService', function($resource) {
    return $resource('product', {}, {
        query: {method:'GET', isArray: true}
    });
});

loansManagerWebServices.factory('ProductService', function($resource) {
    return $resource('product/:id', {}, {
        query: {method:'GET'},
        update: {method: 'PUT'},
        save: {method: 'POST'},
        delete: {method: 'DELETE'}
    });
});
