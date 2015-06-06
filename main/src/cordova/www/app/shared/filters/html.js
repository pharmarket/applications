'use strict'

// html filter (render text as html)
angular.module('filter.html', []).filter('html', function ($sce){
    return $sce.trustAsHtml;
});