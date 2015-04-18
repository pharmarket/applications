'use strict';

app.directive('dirLoader', function(){

	return {
		restrict: 'A',
		scope	: false,
		link	: function(scope, element, attr){
			scope.$watch(attr.dirLoader, function watchAttr(value){

				if (angular.isDefined(value.finally)) {

					element.addClass('loader');

					value.error(function(data){
						element.removeClass('loader');
						element.html('<h2>' + data.title + '</h2><p>error : ' + data.status + '</p><p>detail : ' + data.detail + '</p>');
					})

					value.finally(function(){
						element.removeClass('loader');
					})
				}
			});
		}
	}
})