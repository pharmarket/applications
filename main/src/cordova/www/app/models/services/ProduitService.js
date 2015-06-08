'use strict';

app.service('ProduitService', function($http, API_URL){

	/**
	  * Get product by ID
	  * @param Int id
	  * @return HttpPromise
	  */
	function get(id){
		return $http({
			method 	: 'GET',
			url 	: API_URL + 'produit/' + id,
			headers: {'key': 'dragonteam'},
			cache	: false 
		});
	}

	/**
	  * Get products by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'produit',
			headers: {'key': 'dragonteam'},
			cache	: true
		});
	}






	return ({
		get 	: get,
		getAll 	: getAll
	})
});