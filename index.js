// --------------------------------------------------
// IMPORT LIB. FUNCTIONS
// --------------------------------------------------
var read = require( './lib/read' );
var write = require( './lib/write' );
var append = require( './lib/append' );


// --------------------------------------------------
// API
// --------------------------------------------------
module.exports = {
	read: read,
	write: write,
	append: append
};
