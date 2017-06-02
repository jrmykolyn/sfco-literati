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
	// Setup
	before( function() {
		fs.writeFile( `${TEST_DIR}/data/append.txt`, 'This is the first line of text in the "append.txt" file.', function( err ) {
			if ( err ) { throw err; }
		} );
	} );

	/// TODO[@jrmykolyn] - Replace duplicate `unlink` call with regex.
	after( function() {
		fs.unlink( `${TEST_DIR}/data/append.txt`, function( err ) {
			if ( err ) { throw err; }
		} );

		fs.unlink( `${TEST_DIR}/data/append-new.txt`, function( err ) {
			if ( err ) { throw err; }
		} );
	} );

	it( 'Should return a Promise when invoked.', function( done ) {
		var ref = append()
		.catch( () => {
			assert( ref instanceof Promise );
			done();
		} );
	} );

	it( 'Should `reject` when invoked with no arguments.', function( done ) {
		append()
		.then(
			() => { done( new Error( 'Incorrectly called `resolve` when invoked with no arguments.' ) ); },
			() => { done(); }
		);
	} );

	it( 'Should `reject` when invoked with an invalid file path.', function( done ) {
		append( 'invalid/file/path' )
		.then(
			() => { done( new Error( 'Incorrectly called `resolve` when invoked with an invalid file path.' ) ); },
			() => { done(); }
		);
	} );

	it( 'Should `reject` when invoked without the `data` argument.', function( done ) {
		append( `${TEST_DIR}/data/append.txt` )
		.then(
			() => { done( new Error( 'Incorrectly called `resolve` when invoked with a valid file path and no `data` argument.' ) ); },
			() => { done(); }
		);
	} );

	it( 'Should create a new file when given a valid path to a file which does not already exist.', function( done ) {
		append( `${TEST_DIR}/data/append-new.txt`, 'This is the content of the new file.' )
		.then(
			() => { done(); },
			() => { done( new Error( 'Incorrectly called `resolve` when given a `data` value and a path to a non-existant file.' ) ); }
		);
	} );

	it( 'Should append the `data` to the file at the specified path.', function( done ) {
		var msg = 'This is some text that has been added via the `append` function.';

		append( `${TEST_DIR}/data/append.txt`, msg )
		.then(
			() => {
				return fs.readFile( `${TEST_DIR}/data/append.txt`, ( err, data ) => {
					if ( err ) {
						done( err );
					} else {
						( decoder.write( data ).indexOf( msg ) !== -1 ) ? done() : done( new Error( 'File does not contain `msg` passed to `append`' ) );
					}
				} );
			},
			() => { done( new Error( 'Incorrectly called `reject`.' ) ); }
		);
	} );

	it( 'Should `resolve` with the `data`.', function( done ) {
		var msg = 'This is some text that has been added via the `append` function.';

		append( `${TEST_DIR}/data/append.txt`, msg )
		.then(
			( data ) => {
				if ( data == msg ) {
					done();
				} else {
					throw new Error( '`data` passed to `resolve` does not match input.' );
				}
			},
			() => {
				done( new Error( 'Incorrectly called `reject`.' ) );
			}
		)
		.catch(
			( err ) => {
				done( err );
			}
		);
	} );

	it ( 'Should support an optional `options` argument.', function( done ) {
		var msg = 'This text is being added alongside the `options` argument.';
		var options = {};

		append( `${TEST_DIR}/data/append.txt`, msg, options )
			.then(
				() => { done(); },
				() => { done( new Error( 'Incorrectly called `reject` when invoked with valid arguments, including `options`.' ) ); }
			);
	} );
} );
