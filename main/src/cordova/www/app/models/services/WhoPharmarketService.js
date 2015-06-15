'use strict';

app.service('WhoPharmarketService', function($http, API_URL){

	

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'whoPharmarket',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}






	return ({
		getAll 	: getAll
	})
});