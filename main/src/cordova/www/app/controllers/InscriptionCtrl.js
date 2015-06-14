'use strict';

app.controller('InscriptionCtrl', function($scope, API_URL, InscriptionService){

    console.log('InscriptionCtrl ok');

	$scope.submit = function(){

		var param = {
			data: {
				"mail": $scope.mail,
				"pseudo": $scope.pseudo,
				"password": $scope.password,
				"repassword": $scope.repassword
			}
		};

		InscriptionService.create(param).success(function(data){
			console.log(data);

			
			console.log(data.contact);



			if(data.user){
				$('#result').empty();
				$('#result').append('<p>Votre inscription à bien été enregistré</p>');
			}else{
				$('#result').empty();
				$('#result').append('<p>adresse mail déjà utilisée<br />tous les champs doivent être remplis</p>');
			}

			//$location.path('/');
		});
	}
});