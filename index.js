// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var fs = require( 'fs' );
var Promise = require( 'bluebird' );


// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
/**
 * ...
 */
function read( path ) {
    if ( !path ) {
        return Promise.reject( null );
    }

    return new Promise( function( resolve, reject ) {
        fs.readFile( path, function( err, data ) {
            if ( err ) {
                reject( err );
            }

            resolve( data );
        } )
    } );
}


/**
 * ...
 */
function write( path, data ) {
    if ( !path || !data ) {
        return Promise.reject( null );
    }

    return new Promise( function( resolve, reject ) {
        fs.writeFile( path, data, function( err ) {
            if ( err ) {
                reject( err );
            }

            resolve( true );
        } );
    } );
}


// --------------------------------------------------
// API
// --------------------------------------------------
module.exports = {
    read: read,
    write: write
}