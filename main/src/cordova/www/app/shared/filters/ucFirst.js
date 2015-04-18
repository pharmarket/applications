angular.module('filter.ucFirst', []).filter('ucFirst', function(){

	return function (input, lengh){
		if(angular.isString(input)){
			return input.substring(0,1).toUpperCase() + input.substring(1).toLowerCase();
 		}
 		return input;
	}
});