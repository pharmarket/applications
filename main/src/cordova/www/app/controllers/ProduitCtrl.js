'use strict';

app.controller('ProduitCtrl', function($scope, API_URL, ProduitService){

    console.log('ProduitCtrl ok');

    $scope.produit = ProduitService.getAll().success(
    	function(data){
    		console.log(data);

    		var row = data;
    		$scope.produit = row;
    	});

});