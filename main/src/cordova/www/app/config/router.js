'use strict';

app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl : 'app/views/partials/accueil.html',
		controller 	: 'AccueilCtrl'
	})

	.when('/calcul_posologie', {
		templateUrl : 'app/views/partials/calcul_posologie.html',
		controller 	: 'Calcul_posologieCtrl'
	})

	.when('/cartes_magazins', {
		templateUrl : 'app/views/partials/cartes_magazins.html',
		controller 	: 'Cartes_magazinsCtrl'
	})

	.when('/categories', {
		templateUrl : 'app/views/partials/categories.html',
		controller 	: 'CategoriesCtrl'
	})

	.when('/cgu_cgv', {
		templateUrl : 'app/views/partials/cgu_cgv.html',
		controller 	: 'Cgu_cgvCtrl'
	})

	.when('/chat_voip', {
		templateUrl : 'app/views/partials/chat_voip.html',
		controller 	: 'Chat_voipCtrl'
	})

	.when('/commande', {
		templateUrl : 'app/views/partials/commande.html',
		controller 	: 'CommandeCtrl'
	})

	.when('/confirmation', {
		templateUrl : 'app/views/partials/confirmation.html',
		controller 	: 'ConfirmationCtrl'
	})

	.when('/connexion', {
		templateUrl : 'app/views/partials/connexion.html',
		controller 	: 'Calcul_posologieCtrl'
	})

	.when('/contact', {
		templateUrl : 'app/views/partials/contact.html',
		controller 	: 'ConnexionCtrl'
	})

	.when('/inscription', {
		templateUrl : 'app/views/partials/inscription.html',
		controller 	: 'ContactCtrl'
	})

	.when('/livraison', {
		templateUrl : 'app/views/partials/livraison.html',
		controller 	: 'InscriptionCtrl'
	})

	.when('/notice', {
		templateUrl : 'app/views/partials/notice.html',
		controller 	: 'LivraisonCtrl'
	})

	.when('/page_produit', {
		templateUrl : 'app/views/partials/page_produit.html',
		controller 	: 'NoticeCtrl'
	})

	.when('/paiement', {
		templateUrl : 'app/views/partials/paiement.html',
		controller 	: 'Page_produitCtrl'
	})

	.when('/panier', {
		templateUrl : 'app/views/partials/panier.html',
		controller 	: 'PaiementCtrl'
	})

	.when('/panier', {
		templateUrl : 'app/views/partials/panier.html',
		controller 	: 'PanierCtrl'
	})

	.when('/search_view', {
		templateUrl : 'app/views/partials/search_view.html',
		controller 	: 'Search_viewCtrl'
	})

	.when('/suivie_commande', {
		templateUrl : 'app/views/partials/suivie_commande.html',
		controller 	: 'Suivie_commandeCtrl'
	})

	.when('/voip', {
		templateUrl : 'app/views/partials/user.html',
		controller 	: 'UserCtrl'
	})

	.when('/voip', {
		templateUrl : 'app/views/partials/voip.html',
		controller 	: 'VoipCtrl'
	})


	.otherwise({
		redirectTo : '/'
	})
});
