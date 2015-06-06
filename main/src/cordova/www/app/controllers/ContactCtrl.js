'use strict';

app.controller('ContactCtrl', function($scope, API_URL, ContactService){

    console.log('ContactCtrl ok');

	$scope.submit = function(){

		var param = {
			data: {
				"langue_id": 1,
				"mail": $scope.mail,
				"message": $scope.message,
				"sujet": $scope.sujet,
				"nom": $scope.nom
			}

		};

		ContactService.create(param).success(function(data){
			console.log(data);
			if(data.contact){
				$('#result').empty();
				$('#result').append('<p>Votre message à bien été enregistré</p>');
			}else{
				$('#result').empty();
				$('#result').append('<p>adresse mail déjà utilisée<br />tous les champs doivent être remplis</p>');
			}

			//$location.path('/');
		});
	}

    

});