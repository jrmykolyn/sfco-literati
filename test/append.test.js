/* global
	describe
	it
*/

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const assert = require( 'assert' );
const StringDecoder = require( 'string_decoder' ).StringDecoder;

// Vendor
const Promise = require( 'bluebird' );

// Project
const literati = require( '../' );
const append = literati.append;

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const ROOT_DIR = `${__dirname}/../`;
const TEST_DIR = `${ROOT_DIR}/test`;
const decoder = new StringDecoder( 'utf8' );

// --------------------------------------------------
// TESTS
// --------------------------------------------------
describe( 'literati.append', function() {
	it( 'Should return a Promise when invoked.', function( done ) {
		var ref = append()
			.catch( () => {
				assert( ref instanceof Promise );
				done();
			} );
	} );

	it( 'Should `reject` when invoked with no arguments.' );

	it( 'Should `reject` when invoked with an invalid file path.' );

	it( 'Should `reject` when invoked without the `data` argument.' );

	it( 'Should create a new file when given a valid path to a file which does not already exist.' );

	it( 'Should append the `data` to the file at the specified path.' );

	it( 'Should `resolve` with the `data`.' );

	it ( 'Should support an optional `options` argument.' );
} );
