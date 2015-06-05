'use strict';

app.controller('ModuleLastProductsCtrl', function($scope, API_URL, ProductHomeService){

    console.log('ModuleLastProducts ok');

    $scope.lastProducts = ProductHomeService.getLastProducts().success(
    	function(data){
    		console.log(data);

    		var lastProd = data;
    		$scope.lastProducts = lastProd;
    	});
});