(function() {
  'use strict';

  angular
    .module( 'app.strap' )
    .controller( 'StrapModuleBW', StrapModuleBW );

    StrapModuleBW.$inject = [ '$q', '$rootScope', '$auth', 'commonsDataService', 'strapModal' ];

    function StrapModuleBW( $q, $rootScope, $auth, commonsDataService, strapModal ) {
      var vm = this;

      /* Literals */
      vm.isAuthenticated = $auth.isAuthenticated;
      /* Functions */
      vm.authenticate    = authenticate;
      vm.logInUser       = logInUser;
      vm.logOut          = logOut;
      vm.registerUser    = registerUser;
      $rootScope.jories = 'canino';
      getAuthorization();

      function getAuthorization() {
        $q.all( [getAuthorizationCallBack()] )
        .then(function( response ) {
          console.log( response );
          $rootScope.username = response[0];
          return response;
        });
      }

      function getAuthorizationCallBack() {
        return commonsDataService.authorize()
        .then(function( response ) {
          return response;
        });
      }

      function registerUser() {
        strapModal.show( 'am-fade-and-scale', 'center', '/commonViews/register.html' );
      }

      function logInUser() {
        // $logInUserModal.show();
        strapModal.show( 'am-fade-and-scale', 'center', '/commonViews/login.html');
      }

      function logOut() {
        $auth.logout();
      }

      function authenticate( provider ) {
        $auth.authenticate( provider )
        .then(function( response ) {
          vm.isAuthenticated = $auth.isAuthenticated;
        }, function( err ) {
          if( err ) throw err;
        });
      }
    }
}());
