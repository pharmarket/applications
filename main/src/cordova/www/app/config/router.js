'use strict';

app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl : 'app/views/partials/accueil.html',
		controller 	: 'AccueilCtrl'
	})

	.when('/cgu', {
		templateUrl : 'app/views/partials/cgu.html',
		controller 	: 'CguCtrl'
	})

	.when('/cgv', {
		templateUrl : 'app/views/partials/cgv.html',
		controller 	: 'CgvCtrl'
	})

	.when('/contact', {
		templateUrl : 'app/views/partials/contact.html',
		controller 	: 'ContactCtrl'
	})

	.when('/whoPharmarket', {
		templateUrl : 'app/views/partials/whoPharmarket.html',
		controller 	: 'WhoPharmarketCtrl'
	})

	.otherwise({
		redirectTo : '/'
	})
});
