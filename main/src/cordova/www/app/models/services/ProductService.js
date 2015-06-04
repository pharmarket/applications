'use strict';

app.service('ProductService', function($http, API_URL){

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
	  * Get album by ID
	  * @param Object data Object JSON
	  * object key : author : id author
	  * 			 genre  : id genre
	  *              user	: id user
	  *				 type	: (sell/search/exchange)
	  *				 last	: sort by date DESC
	  *				 size	: number of elements per page / -1 all
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