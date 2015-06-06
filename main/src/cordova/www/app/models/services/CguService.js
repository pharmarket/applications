'use strict';

app.service('CguService', function($http, API_URL){

	/**
	  * Get album by ID
	  * @param Int id
	  * @return HttpPromise
	  */
	function get(id){
		return $http({
			method 	: 'GET',
			url 	: API_URL + '/albumfull/' + id,
			cache	: false 
		})
	}

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'cgu',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}






	return ({
		get 	: get,
		getAll 	: getAll
	})
});