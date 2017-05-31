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
module.exports = write;
