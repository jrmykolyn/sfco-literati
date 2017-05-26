/* global
	describe
	it
*/

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const assert = require( 'assert' );

// Vendor
const Promise = require( 'bluebird' );

// Project
const literati = require( '../' );
const read = literati.read;

// --------------------------------------------------
// TESTS
// --------------------------------------------------
describe( 'literati.read', function() {
	it( 'Should return a Promise when invoked.', function( done ) {
		var ref = read()
			.catch( () => {
				assert( ref instanceof Promise );
				done();
			} );
	} );

	it( 'Should `reject` when invoked with no arguments.', function( done ) {
		read()
			.then(
				() => { done( new Error( '`resolved`' ) ); },
				() => { done(); }
			);
	} );

	/// TODO[@jrmykolyn] - Complete 'pending' test below.
	it( 'Should throw an error when invoked with an invalid file path.' );

	/// TODO[@jrmykolyn] - Complete 'pending' test below.
	it( 'Should resolve with the correct data when invoked with a valid file path.' );
} );
