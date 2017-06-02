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
function append( path, data, options ) {
	if ( !path || !data ) {
		return Promise.reject( null );
	}

	options = ( options || typeof options === 'object' ) ? options : {};

	return new Promise( function( resolve, reject ) {
		fs.appendFile( path, data, options, function( err ) {
			if ( err ) {
				reject( err );
			}

			resolve( data );
		} );
	} );
}


// --------------------------------------------------
// API
// --------------------------------------------------
module.exports = append;
