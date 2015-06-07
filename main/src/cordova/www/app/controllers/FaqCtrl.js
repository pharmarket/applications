'use strict';

app.controller('FaqCtrl', function($scope, API_URL, FaqService){

    console.log('FaqCtrl ok');

    $scope.faq = FaqService.getAll().success(
    	function(data){
    		console.log(data);

    		var cond = data;
    		$scope.faq = cond;
    	});

});