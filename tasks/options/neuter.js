module.exports = {
	app: {
		options: {
			basePath: '<%= pkg.properties.paths.app %>/'
		},
		src: '<%= pkg.properties.paths.app %>/scripts/app.js',
		dest: '.tmp/scripts/combined-scripts.js'
	}
}
