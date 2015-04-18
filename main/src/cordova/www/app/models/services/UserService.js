'use strict';

app.service('UserService', function($http, API_URL, CLIENT_INFO, LocalStorageService){

	/**
	 * Connect user
	 * @param Object data Object JSON
	 * Object key : username : mail user
	 *			    password : password user
	 *
	 * @return HttPromise
	 */
	function connect(data){
		var params 		= CLIENT_INFO;
		// on ajoute deux propriétés à l'objet
		params.username = data.username;
		params.password = data.password;

		return $http({
			method  : 'POST',
			url    	: API_URL + '/oauth',
			data    : params,
			cache	: false
		});
	}

	function disconnect(){
		LocalStorageService.flush();
	}

	function tokenStorage(data, remember){
		LocalStorageService.save({
			access 	 : data.access_token,
			remember : remember
		});

		if (remember===true || LocalStorageService.get('remember')===true) {
			LocalStorageService.save({
				'refresh' 		: data.refresh_token,
				'refresh-time'	: Math.round(Date.now()/1000) + data.experires_in
			});
		}
	}

	function tokenRefresh(){

	}

	/**
	 * Get User
	 *
	 * @param Int/String number id/'current'
	 * @return HttPromise
	 */
	function get(id){
		return $http({
			method  : 'GET',
			url    	: API_URL + '/users/' + id,
			cache	: false
		});
	}

	function getAll(data){

	}

	function create(data){

	}

	function update(id, data){
		return $http({
			method  : 'PATCH',
			url    	: API_URL + '/users/' + id,
			data    : data,
			cache	: false
		});
	}

	function remove(id){

	}

	return({
		connect			: connect,
		disconnect 		: disconnect,
		tokenStorage 	: tokenStorage,
		tokenRefresh 	: tokenRefresh,
		get 			: get,
		getAll			: getAll,
		create			: create,
		update			: update,
		delete			: remove
	});
});