'use strict';

app.controller('AccueilCtrl', function($scope, API_URL, ProductService){

    console.log('AccueilCtrl ok');

    $scope.produits = ProductService.getAll().success(
    	function(data){
    		console.log(data);

    		var prod = data;
    		$scope.produits = prod;
    	});
});