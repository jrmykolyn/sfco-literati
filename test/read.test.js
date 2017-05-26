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
const read = literati.read;

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const ROOT_DIR = `${__dirname}/../`;
const TEST_DIR = `${ROOT_DIR}/test`;
const decoder = new StringDecoder( 'utf8' );

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

	it( 'Should throw an error when invoked with an invalid file path.', function( done ) {
		read( 'invalid/file/path' )
			.then( () => {
				done( new Error( 'Function incorrectly `resolved` when invoked with an invalid file path.' ) );
			} )
			.catch( () => {
				done();
			} );
	} );

	it( 'Should resolve with the correct data when invoked with a valid file path.', function( done ) {
		read( `${TEST_DIR}/data/input.txt` )
			.then( ( data ) => {
				return decoder.write( data );
			} )
			.then( ( text ) => {
				assert( typeof text === 'string' );
				done();
			} )
			.catch( ( err ) => {
				done( err );
			} );
	} );
} );
