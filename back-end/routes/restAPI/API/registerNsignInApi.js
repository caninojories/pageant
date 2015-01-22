(function() {
  'use strict';

  var node = app_require( 'services/module.config' ),
      app  = node.express(),

  POST_RegisterUser = require( '../adminApImplementation/registerNsignIn/postIndex.js' ),
  GET_UserInfo      = require( '../adminApImplementation/registerNsignIn/getIndex.js' );

    app.route( '/userApi/userRegister' )
      .post( node.passport.authenticate('local-register'), POST_RegisterUser.registerUser );

    app.route( '/userApi/userInfo' )
      .get( GET_UserInfo.getUserInfo );

  module.exports = app;

}());
