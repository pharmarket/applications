'use strict';

app.controller('CharteCtrl', function($scope, API_URL, CharteService){

    console.log('CharteCtrl ok');

    $scope.charte = CharteService.getAll().success(
    	function(data){
    		console.log(data);

    		var cond = data;
    		$scope.charte = cond;
    	});

});