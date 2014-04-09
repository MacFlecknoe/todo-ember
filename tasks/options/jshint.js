//
// Validate files with JSHint.
// https://github.com/gruntjs/grunt-contrib-jshint
//
module.exports = {
		options: {
				jshintrc: '.jshintrc',
				// use an external reporter
				reporter: require('jshint-stylish')
		},
		all: [
				'Gruntfile.js',
				'<%= pkg.properties.paths.app %>/scripts/{,*/}*.js',
				'!<%= pkg.properties.paths.app %>/vendor/*',
				'test/spec/{,*/}*.js'
		]
};
