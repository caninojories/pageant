(function() {
  'use strict';

  angular
    .module( 'app.registerNsignIn' )
    .controller( 'RegisterNSignIn',  RegisterNSignIn );

    RegisterNSignIn.$inject = [ '$timeout', '$auth', '$rootScope', 'authToken', 'strapAlert', 'strapModal' ];

    function RegisterNSignIn( $timeout, $auth, $rootScope, authToken, strapAlert, strapModal ) {
      var vm = this;

      /* Literals */
      vm.token = authToken.getToken();
      /* Functions */
      vm.register = register;
      vm.login    = login;


      function register( registerFormIsValid ) {
        if( registerFormIsValid !== true ) return;

        $auth.signup({
          email: vm.email,
          password: vm.password,
          username: vm.username
        }).then(function( response ) {
          $rootScope.username = vm.username;
          strapModal.hide();
          strapAlert.show( 'Success', '100% success Registered' );
          $timeout(function() {
            strapAlert.hide();
          }, 2000);
        });
      }

      function login( isLoginFormValid ) {
        if( !isLoginFormValid ) return;

        $auth.login({
          email: vm.email,
          password: vm.password
        }).then(function( response ) {
          strapModal.hide();
        }).catch(function( error ) {
          strapAlert.show( 'Error', 'Error Message' );
          $timeout(function() {
            strapAlert.hide();
          }, 2000 );
        });
      }

      function loginCallBack() {
        return commonsDataService
        .login( 'userLogIn', {
          email: vm.email,
          password: vm.password
        })
        .then(function( response ) {
          return response;
        });
      }
    }
}());
