'use strict';

app.controller('CgvCtrl', function($scope, API_URL, CgvService){

    console.log('CgvCtrl ok');

    $scope.cgv = CgvService.getAll().success(
    	function(data){
    		console.log(data);

    		var cond = data;
    		$scope.cgv = cond;
    	});

});