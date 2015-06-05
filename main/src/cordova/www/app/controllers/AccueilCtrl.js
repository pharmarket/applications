'use strict';

app.controller('AccueilCtrl', function($scope, API_URL, ProductHomeService){

    console.log('AccueilCtrl ok');

    $scope.produits = ProductHomeService.getAll().success(
    	function(data){
    		console.log(data);

    		var prod = data;
    		$scope.produits = prod;
    	});

});