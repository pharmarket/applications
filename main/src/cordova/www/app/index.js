// Limite au niveau de la syntaxe
'use strict';

// Chargement de l'ppalication (l'ppalication est créée)
var ppa = angular.module('ppa', [
    'ngRoute',
    'ngMessages',
    'ui.bootstrap',
    'filter.truncate',
    'filter.ucFirst'
    ]);

/**
  * Constantes, configuration server(webservice)
  */

ppa.constant('API_URL', 'https://api-album');
ppa.constant('CLIENT_INFO', {
    grant_type      : 'password',
    client_id       : 'webppa',
    client_secret   : 'webppa'
})

ppa.constant('TYPES', {
    element : [
        {name: 'Sell',      value:'sell'},
        {name: 'Exchange',  value:'exchange'},
        {name: 'Search',    value:'search'}
    ]
})

ppa.run(function($rootScope, API_URL){
    $rootScope.API_URL = API_URL;
});