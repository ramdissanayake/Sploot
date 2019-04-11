// Sploot! Animal Rescue.
// Main Routes Module.
// Mounts routers for all routes included in ./src/routes directory
// Do Not change the content of this file
const express = require('express');
const router = express.Router();
const fileSys = require('fs');


// Routes in routes directory go here.
fileSys.readdirSync( __dirname ).forEach( function( route ) {
    route = route.split( '.' )[ 0 ] ;
    if ( route === 'mainRoutes' ) return ;
    console.log( 'Loading route ' + route + '...' ) ;
    const childRouter = require( './' + route  );
    router.use( '/api/' + route, childRouter ) ;
  } ) ;

module.exports = router;