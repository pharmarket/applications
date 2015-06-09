'use strict';

app.service('CommentService', function($http, API_URL){




	function create(data){
		var params = data;
		console.log(params);

		return $http({
			method  : 'POST',
			url 	: API_URL + 'produit',
			headers : {'key': 'dragonteam'},
			data 	: params,
			cache 	: false
		});
	}


	return ({
		create : create
	})

});