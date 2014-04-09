//
// Concatenate files in the order you require.
// https://github.com/trek/grunt-neuter
//
module.exports = {
	app: {
		options: {
			basePath: '<%= pkg.properties.paths.app %>/'
		},
		src: '<%= pkg.properties.paths.app %>/scripts/app.js',
		dest: '.tmp/scripts/combined-scripts.js'
	}
}
