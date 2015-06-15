'use strict';

app.service('ContactService', function($http, API_URL){

	

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'contact',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}



	/**
	 * Ajout contact
	 * @param Object data Object JSON
	 * Object key : data
	 *
	 * @return HttPromise
	 */
	function create(data){
		// on ajoute deux propriétés à l'objet
		var params = data;
		console.log(params);

		return $http({
			method  : 'POST',
			url    	: API_URL + 'contact',
			headers: {'key': 'dragonteam'},
			data    : params,
			cache	: false
		});
	}






	return ({
		getAll 	: getAll,
		create  : create
	})
});