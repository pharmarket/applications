'use strict';

app.controller('Calcul_posologieCtrl', function($scope, API_URL, Calcul_posologieService){

    console.log('Calcul_posologieCtrl ok');

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

		Calcul_posologieService.create(param).success(function(data){
			console.log(data);

			
			console.log(data.contact);



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