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
		});
	}






	return ({
		getAll 	: getAll
	})
});