'use strict';

app.controller('Comment_ProduitCtrl', function($scope, API_URL, CommentService){
	console.log('Comment_ProduitCtrl OK');

	

	$scope.submit = function(){
		var param = {
			data : {
				"user_id": 11,
				"produit_id": 162,
				"nom": $scope.nom,
				"description": $scope.description,
				"note": $scope.note,
				"done": 0,
			}
		};

		CommentService.create(param).success(function(data){
			console.log(data);
			if(data.commentaire){
				$('#result').empty();
				$('#result').append('<p>Votre commentaire à bien été enregistré</p>');
			}else{
				$('#result').empty();
				$('#result').append('<p>Erreur lors de l\'envoie<br />veuillez vérifier tous vos champs</p>');
			}
		});
	}
});