'use strict';

/* Controllers */

ProductsController.$inject = ['$scope', 'ProductsService', '$location', '$routeParams'];
function ProductsController($scope, ProductsService, $location, $routeParams) {
    $scope.productsList = ProductsService.query();

    $scope.removeProduct = function(product) {
        product.$delete({id: product.id});
    }
};

ProductController.$inject = ['$scope', 'ProductService', '$location', '$routeParams'];
function ProductController($scope, ProductService, $location, $routeParams) {
    $scope.product = ProductService.get({id:$routeParams.id});

    $scope.saveProduct = function() {
        $scope.product.$update({id: $scope.product.id});
    }

    if (!$scope.product) {
        $scope.product = {
            id: 'id',
            barcode: '1234567890',
            title: 'Product title',
            info: 'Some info'
        };
    }

};