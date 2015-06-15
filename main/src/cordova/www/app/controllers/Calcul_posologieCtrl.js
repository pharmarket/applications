'use strict';

app.controller('Calcul_posologieCtrl', function($scope, API_URL, Calcul_posologieService){

    console.log('Calcul_posologieCtrl ok');

	$scope.submit = function(){

		var param = {
			data: {
				"poid": $scope.poid,
				"age": $scope.age,
				"taille": $scope.taille,
				"sexe": $scope.sexe
			}

		};

		Calcul_posologieService.create(param).success(function(data){
			console.log(data);

			
			console.log(data.contact);



			if(data.countPosologie){
				$('#result').empty();
				$('#result').append('<p>Votre message à bien été enregistré</p>');
			}else{
				$('#result').empty();
				$('#result').append('<p>tous les champs doivent être remplis</p>');
			}

		});
	}

    

});