'use strict';

app.controller('ModuleBestProductsCtrl', function($scope, API_URL, ProductHomeService){

    console.log('ModuleBestProductsCtrl ok');

    $scope.bestProducts = ProductHomeService.getBestProducts().success(
    	function(data){
    		console.log(data);

			var bestProd = data;
			$scope.bestProducts = bestProd;

    	});
});


/*
if(angular.equals([], data) == true){
                var infoMessage = "Aucun élément n'existe pour le moment"
                alert(infoMessage);
            }else{
                var bestProd = data;
                $scope.bestProducts = bestProd;
            }

            //alert(angular.equals([], data));
            */