'use strict';

app.service('CategorieService', function($http, API_URL){

	

	/**
	  * Get categorie by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'categorie',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}






	return ({
		getAll 	: getAll
	})
});