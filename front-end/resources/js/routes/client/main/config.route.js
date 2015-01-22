(function() {
  'use strict';

  angular
    .module( 'app.main' )
    .run( appRun );

    function appRun( routehelper ) {
      routehelper.configureRoutes( getRoutes() );
    }

    function getRoutes() {
      return [{
        state: 'main',
        config: {
          url: '/',
          templateUrl: '/client/main/index.html',
          controller: 'Main as vm',
          title: 'Main'
        }
      }];
    }
}());
