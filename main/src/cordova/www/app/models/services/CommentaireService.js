'use strict';

app.service('CommentaireService', function($http, API_URL){

	/**
	  * Get commentaire by ID
	  * @param Object data Object JSON
	  * @return HttpPromise
	  */
	function getAll(){
		
		return $http({
			method	: 'GET',
			url 	: API_URL + 'commentaire',
			headers: {'key': 'dragonteam'},
			cache	: true
		})
	}



	function remove(id){

		return $http({
			method 	: 'DELETE',
			url 	: API_URL + '/commentaire/' + id,
			cache	: false 
		})
	}






	return ({
		getAll 	: getAll,
		remove  : remove
	})
});