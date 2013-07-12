'use strict';

/* Controllers */

ProductsController.$inject = ['$scope', 'ProductsService', '$location', '$routeParams'];
function ProductsController($scope, ProductsService, $location, $routeParams) {
    $scope.productsList = ProductsService.query();
    console.log($scope.productsList);
};