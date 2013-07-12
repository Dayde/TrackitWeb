'use strict';

var loansManagerWebServices = angular.module('loansManagerWeb.services', ['ngResource']);
loansManagerWebServices.factory('ProductsService', function($resource) {
    return $resource('api/product', {}, {
        query: {method:'GET', isArray: true}
    });
});

loansManagerWebServices.factory('ProductService', function($resource) {
    return $resource('api/product/:id', { id: '@id' }, {
        query: {method:'GET'},
        update: {method: 'PUT'},
        save: {method: 'POST'},
        delete: {method: 'DELETE'}
    });
});
