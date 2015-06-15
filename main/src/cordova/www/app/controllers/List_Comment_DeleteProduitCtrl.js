'use strict';

app.controller('List_Comment_DeleteProduitCtrl', function($scope, $routeParams, CommentaireService){

	$scope.show = CommentaireService.remove($routeParams.id).success(
		function(data){
			$scope.show = data;
			console.log(data);
		});
	console.log($scope.show);
});