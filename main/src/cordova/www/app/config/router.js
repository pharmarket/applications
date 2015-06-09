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

	.when('/charte', {
		templateUrl : 'app/views/partials/charte.html',
		controller 	: 'CharteCtrl'
	})

	.when('/faq', {
		templateUrl : 'app/views/partials/faq.html',
		controller 	: 'FaqCtrl'
	})

	.when('/produit', {
		templateUrl : 'app/views/partials/produit.html',
		controller  : 'ProduitCtrl'
	})

	.when('/produit/:id', {
		templateUrl : 'app/views/partials/show_produit.html',
		controller  : 'Show_ProduitCtrl' 
	})


	.when('/commentaire', {
		templateUrl : 'app/views/partials/commentaire.html',
		controller  : 'Comment_ProduitCtrl'
	})





	






	.when('/categ', {
		templateUrl : 'app/views/partials/categ.html',
		controller  : 'ProduitCtrl'
	})

	/*.when('/categ/:id', {
		templateUrl : 'app/views/partials/produit.html',
		controller  : 'ProduitCtrl'
	})*/







	.otherwise({
		redirectTo : '/'
	})
});
