//
// Start a connect web server.
// https://github.com/gruntjs/grunt-contrib-connect
//
module.exports = {
	options: {
		port: '<%= pkg.properties.ports.app %>',
		hostname: '<%= pkg.properties.hostname %>'
	},
	all: {
		options: {
			// Inject a live reload script tag into your page using connect-livereload
			livereload: '<%= pkg.properties.ports.livereload %>',
			// The base (or root) directory from which files will be served.
			base: [
				'<%= pkg.properties.paths.dist %>'
			]
		}
	},
	test: {
		options: {
			base: [
				'<%= pkg.properties.paths.dist %>'
			]
		}
	}
}
