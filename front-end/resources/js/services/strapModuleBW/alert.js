(function() {
  'use strict';

  angular
  .module( 'app.services' )
  .service( 'strapAlert', strapModal );

  strapModal.$inject = [ '$alert' ];

  function strapModal( $alert ) {
    var vm = this;

    vm.alert = alert;
    vm.show  = show;
    vm.hide  = hide;

    function show( title, content, type, container ) {
      vm.alert = vm.alert( title, content, type, container );
    }

    function hide() {
      vm.alert.hide();
    }

    function alert( title, content, type, container ) {
      var strapAlert = $alert({
        title: title,
        content: content,
        type: type || 'info',
        container: container || 'alert-info',
        show: true
      });

      return strapAlert;
    }
  }
}());
