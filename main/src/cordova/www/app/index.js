// Limite au niveau de la syntaxe
'use strict';

// Chargement de l'application (l'application est créée)
var app = angular.module('app', [
    'ngRoute',
    'filter.truncate',
    'filter.ucFirst',
    'filter.html',
    ]);

/**
  * Constantes, configuration server(webservice)
  */

app.constant('API_URL', 'http://local.dev/site/public/ws/');