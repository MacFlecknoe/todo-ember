//
// Minifies HTML using html-minifier
//
// https://github.com/gruntjs/grunt-contrib-htmlmin
//
module.exports = {
	dist: {
		options: {
			// strip HTML comments
			removeComments: true,
			// collapse white space that contributes to text nodes in a document tree
			collapseWhitespace: true
		},
		// dynamically map files
		files: [{
			// enable dynamic expansion
			expand: true,
			// src matches are relative to this path
			cwd: 'dist',
			// actual patterns to match
			src: ['*.html'],
			// destination path prefix
			dest: 'dist'
		}]
	}
}
