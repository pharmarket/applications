'use strict';

app.service('AlbumFullService', function($http, API_URL){

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
	function getAll(data){
		return $http({
			method	: 'GET',
			url 	: API_URL + '/albumfull',
			params	: data,
			cache	: true
		});
	}

	return ({
		get 	: get,
		getAll 	: getAll
	})
});