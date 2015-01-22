(function() {
  'use strict';

  angular
    .module('app.commons')
    .factory('commonsDataService', commonsDataService);

    commonsDataService.$inject = [ 'authToken', 'userInfoServiceApi' ];

    function commonsDataService( authToken, userInfoServiceApi ) {
      var service = {
        authorize: authorize
      };
      return service;

      function authorize() {
        var token = authToken.getToken();
        return userInfoServiceApi.one( 'userInfo' )
          .get( {token:token} )
          .then( authorizeCallBack )
          .catch(function( message ) {

          });

        function authorizeCallBack( response, statuse, header, config ) {
          return response;
        }
      }
    }
})();
