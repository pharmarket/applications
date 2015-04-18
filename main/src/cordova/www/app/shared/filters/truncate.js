'use strict';

angular.module('filter.truncate', []).filter('truncate', function(){

	return function (input, lengh){
		if(angular.isString(input)){
			return input.lengh>lengh ? input.substr(0, lengh) + '...' : input;
 		}
 		return input;
	}
});