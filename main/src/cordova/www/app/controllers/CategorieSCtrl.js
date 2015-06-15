'use strict';

app.controller('CategorieSCtrl', function($scope, API_URL, CategorieService){

    console.log('CategorieSCtrl ok');

    $scope.categorie = CategorieService.getAll().success(
    	function(data){
    		console.log(data);

    		var cond = data;
    		$scope.categorie = cond;
    	});

});