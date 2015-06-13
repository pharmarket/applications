'use strict';

app.controller('List_Comment_ProduitCtrl', function($scope, API_URL, CommentaireService){

    console.log('List_Comment_ProduitCtrl ok');

    $scope.commentaire = CommentaireService.getAll().success(
    	function(data){
    		console.log(data);

    		var row = data;
    		$scope.commentaire = row;
    	});

});