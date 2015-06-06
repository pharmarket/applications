'use strict';

app.controller('CguCtrl', function($scope, API_URL, CguService){

    console.log('CguCtrl ok');

    $scope.cgu = CguService.getAll().success(
    	function(data){
    		console.log(data);

    		var cond = data;
    		$scope.cgu = cond;
    	});

});