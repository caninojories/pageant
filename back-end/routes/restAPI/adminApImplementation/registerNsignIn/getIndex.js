(function() {
  'use strict';

  var node    = app_require( 'services/module.config' );

  exports.getUserInfo = function( req, res, next ) {
    var token = req.query.token;
    if( !token ) return res.json( 'Unauthorized: Please Login to View the Page' );

      try {
        var payLoad = node.jwt.decode( token, 'shhh..' );
      }catch( e ) {
        return res.json( 'Unauthorized: TOKEN ERROR' );
      }

      node.mongoDB( node, 'pageant' )
      .then(function() {
        node.User
        .findById( payLoad.sub, function( err, document ) {
          console.log( document.username );
          res.json( document.username );
        });
      });
  };
}());
