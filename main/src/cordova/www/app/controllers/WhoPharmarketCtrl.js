'use strict';

app.controller('WhoPharmarketCtrl', function($scope, API_URL, WhoPharmarketService){

    console.log('WhoPharmarketCtrl ok');

    $scope.whoPharmarket = WhoPharmarketService.getAll().success(
    	function(data){
    		console.log(data);

    		var who = data;
    		$scope.whoPharmarket = who;
    	});
});