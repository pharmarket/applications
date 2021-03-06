'use strict';

app.service('CgvService', function($http, API_URL){

	

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'cgv',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}






	return ({
		getAll 	: getAll
	})
});