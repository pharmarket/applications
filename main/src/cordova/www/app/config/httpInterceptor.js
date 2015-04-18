// register the interceptor as a service
app.factory('myHttpInterceptor', function($q, $injector) {
  return {
    // optional method
    'request': function(config) {
      // do something on success
      var LocalStorageService = $injector.get('LocalStorageService');
      if (LocalStorageService.isKey('access')) {
        config.headers.Authorization = 'Bearer ' + LocalStorageService.get('access');
      };
      return config;
    },

   'requestError': function(rejection) {
      // do something on error
      return $q.reject(rejection);
    },

    // optional method
    'response': function(response) {
      // do something on success
      return response;
    },

    // optional method
   'responseError': function(rejection) {
      // do something on error
      return $q.reject(rejection);
    }
  };
});
app.config(function($httpProvider){
  $httpProvider.interceptors.push('myHttpInterceptor');
})
