'use strict';

app.service('ProductHomeService', function($http, API_URL){

	

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'homeApp',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}





	  /**
	  * Get lastProduct by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getLastProducts(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'lastProducts',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}


	/**
	* Get bestProduct by ID
	* @param Object data Object JSON
	* @return HttpPromise
    */
	function getBestProducts(){

		return $http({
			method 	: 'GET',
			url 	: API_URL + 'bestProducts',
			headers	: {'key': 'dragonteam'},
			cache	: true
		});
	}










	return ({
		getAll 	: getAll,
		getLastProducts : getLastProducts,
		getBestProducts : getBestProducts
	})
});