(function() {
  'use strict';

  angular
    .module( 'app.services' )
    .service( 'strapModal', strapModal );

    strapModal.$inject = [ '$modal' ];

    function strapModal( $modal ) {
      var vm = this;

      vm.modal    = modal;
      vm.show     = show;
      vm.hide     = hide;
      vm.modalObj = null;

      function show( animation, placement, template ) {
        vm.modalObj = vm.modal( animation, placement, template );
      }

      function hide() {
        vm.modalObj.hide();
      }

      function modal( animation, placement, template ) {
        var strapModal = $modal({
          animation: animation,
          placement: placement,
          template: template,
          show: true
        });

        return strapModal;
      }
    }
}());
