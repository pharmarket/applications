'use strict';

app.controller('Show_ProduitCtrl', function($scope, $routeParams, ProduitService){

	$scope.show = ProduitService.get($routeParams.id).success(
		function(data){
			$scope.show = data;
			console.log(data);
		});
	console.log($scope.show);
});