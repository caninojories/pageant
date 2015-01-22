(function() {
  'use strict';

  var path     = require( 'path' ),
      nunjucks = require( 'nunjucks' ),
      Promise  = require( 'bluebird' ),
      rootPath = path.normalize(__dirname + '/../../');

  module.exports = {
    clusterService    : require( './cluster' ),
    createSendToken   : require( './createSendToken' ),
    User              : require( '../model/User' ),
    mongoDB           : require( '../configuration/mongodb' ),
    bodyParser        : require( 'body-parser' ),
    chalk             : require( 'chalk' ),
    cluster           : require( 'cluster' ),
    compression       : require( 'compression' ),
    express           : require( 'express' ),
    expressSession    : require( 'express-session' ),
    favicon           : require( 'serve-favicon' ),
    jwt               : require( 'jwt-simple' ),
    LocalStrategy     : require( 'passport-local' ).Strategy,
    logger            : require( 'morgan' ),
    methodOverride    : require( 'method-override' ),
    moment            : require( 'moment' ),
    mongoose          : require( 'mongoose' ),
    multer            : require( 'multer' ),
    numCPUs           : require( 'os' ).cpus().length,
    nunjucks          : require( 'nunjucks' ),
    nunjucksEnv       : new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(rootPath, 'views'))),
    passport          : require( 'passport' ),
    Promise           : require( 'bluebird' ),
    url               : require( 'url' ),

    faviconPath       : rootPath + 'front-end/resources/favicon.ico',
    nunjucksPath      : path.join( rootPath, 'front-end/views' ),
    css               : path.join( rootPath, 'front-end/resources/css' ),
    fonts             : path.join( rootPath, 'front-end/resources/fonts' ),
    img               : path.join( rootPath, 'front-end/resources/img' ),
    js                : path.join( rootPath, 'front-end/resources/js' ),
    compiledCss       : path.join( rootPath, 'front-end/.tmp' ),
    bowerComponents   : path.join( rootPath, 'front-end/bower' ),
    commonViews       : path.join( rootPath, 'front-end/views/commons' ),
  };
}());
