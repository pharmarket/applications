'use strict';

app.service('Calcul_posologieService', function($http, API_URL){

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
			url    	: API_URL + 'countPosologie',
			headers: {'key': 'dragonteam'},
			data    : params,
			cache	: false
		});
	}






	return ({
		create  : create
	})
});