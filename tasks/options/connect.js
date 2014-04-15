//
// Start a connect web server.
// https://github.com/gruntjs/grunt-contrib-connect
//
module.exports = {
	options: {
		port: '<%= pkg.config.servers.app.port %>',
		hostname: '<%= pkg.config.servers.app.hostname %>'
	},
	all: {
		options: {
			// Inject a live reload script tag into your page using connect-livereload
			livereload: '<%= pkg.config.servers.livereload.port %>',
			// The base (or root) directory from which files will be served.
			base: [
				'dist'
			]
		}
	},
	test: {
		options: {
			base: [
				'dist'
			]
		}
	}
}
