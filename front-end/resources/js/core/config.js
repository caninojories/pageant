(function() {
    'use strict';

    var config = {
      appErrorPrefix: '[Magens Error] ', //Configure the exceptionHandler decorator
      appTitle: 'UDAYS Pageant: @by League of Outstanding Programmers',
      version: '0.0.0'
    };

    angular
      .module( 'app.core' )
      .value( 'config', config )
      .config(configure)
      .config( toastrConfig )
      .config( registerNsignInConfig );


    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    function registerNsignInConfig( $authProvider, cfpLoadingBarProvider ) {
      cfpLoadingBarProvider.latencyThreshold = 100;
      $authProvider.loginUrl = 'http://localhost:3000/userApi/userLogIn';
      $authProvider.signupUrl = 'http://localhost:3000/userApi/userRegister';
    }

    /* @ngInject */
    function configure ( $httpProvider, $locationProvider, $logProvider, $urlRouterProvider, $stateProvider,
      exceptionHandlerProvider, routehelperConfigProvider ) {

        $locationProvider.html5Mode(true);
        if ($logProvider.debugEnabled)  $logProvider.debugEnabled(true);

        routehelperConfigProvider.config.$stateProvider = $stateProvider;
        routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        routehelperConfigProvider.config.docTitle = 'NG-Modular: ';

        $httpProvider.interceptors.push('authInterceptor');
        /*Configure the common exception handler*/
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
