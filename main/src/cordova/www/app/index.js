// Limite au niveau de la syntaxe
'use strict';

// Chargement de l'application (l'application est créée)
var app = angular.module('app', [
    'ngRoute',
	'ngMessages',
    'filter.truncate',
    'filter.ucFirst',
    'filter.html',
    ]);

/**
  * Constantes, configuration server(webservice)
  */
/******* METTRE L ADRESSE FINAL DU SITE POUR MA PART J AI MIS LOCAL.DEV LE MODIFIER PAS SON LOCAL *******/

app.constant('API_URL', 'http://local.dev/site/public/ws/');



// Config Whitelist URL
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/**',
        '*://www.youtube.com/**',
        'http://www.youtube.com/embed/**',
        'https://www.youtube.com/embed/**'
    ]);
});
