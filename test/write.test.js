/* global
	describe
	before
	after
	it
*/

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const assert = require( 'assert' );
const fs = require( 'fs' );

// Vendor
const Promise = require( 'bluebird' );

// Project
const literati = require( '../' );
const write = literati.write;

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const ROOT_DIR = `${__dirname}/../`;
const TEST_DIR = `${ROOT_DIR}/test`;

// --------------------------------------------------
// TESTS
// --------------------------------------------------
describe( 'literati.write', function() {
	// Setup
	before( function() {
		fs.writeFile( `${TEST_DIR}/data/output.txt`, 'This is the output text.', function( err ) {
			if ( err ) { throw err; }
		} );
	} );

	// Teardown
	after( function() {
		fs.unlink( `${TEST_DIR}/data/temp.txt`, function( err ) {
			if ( err ) { throw err; }
		} );

		fs.unlink( `${TEST_DIR}/data/output.txt`, function( err ) {
			if ( err ) { throw err; }
		} );
	} );

	it( 'Should return a Promise when invoked.', function( done ) {
		var ref = write()
			.catch( () => {
				assert( ref instanceof Promise );
				done();
			} );
	} );

	it( 'Should `reject` when invoked with no arguments.', function( done ) {
		write()
			.then(
				() => { done( new Error( '`resolved`' ) ); },
				() => { done(); }
			);
	} );

	it( 'Should `reject` when invoked with only the `path` argument.', function( done ) {
		write( 'valid/file/path' )
			.then(
				() => { done( new Error( '`resolved`' ) ); },
				() => { done(); }
			);
	} );

	it( 'Should throw an error when invoked with an invalid file path.', function( done ) {
		write( 'invalid/file/path', 'This is the output text.' )
			.then( () => {
				done( new Error( 'Function incorrectly `resolved` when invoked with an invalid file path.' ) );
			} )
			.catch( () => {
				done();
			} );
	} );

	it( 'Should resolve with a value of `true` when invoked with a valid path to an existing file.', function( done ) {
		write( `${TEST_DIR}/data/output.txt`, 'This is the output text.' )
			.then( ( response ) => {
				assert( response === true );
				done();
			} )
			.catch( ( err ) => {
				done( err );
			} );
	} );

	it( 'Should create a new file when given a valid path to a file which does not already exist.', function( done ) {
		write( `${TEST_DIR}/data/temp.txt`, 'This is the temporary output text.' )
			.then( ( response ) => {
				assert( response === true );
				done();
			} )
			.catch( ( err ) => {
				done( err );
			} );
	} );
} );
