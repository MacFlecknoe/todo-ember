module.exports = {
	options: {
		port: '<%= pkg.properties.ports.livereload %>',
		hostname: '<%= pkg.properties.hostname %>'
	},
	livereload: {
		options: {
			middleware: function (connect) {
				return [
					require('connect-livereload')({port: '<%= pkg.properties.ports.livereload %>'}),
					connect.static(require('path').resolve('.tmp')),
					connect.static(require('path').resolve('<%= pkg.properties.paths.app %>'))
				];
			}
		}
	},
	test: {
		options: {
			middleware: function (connect) {
				return [
					connect.static(require('path').resolve('test')),
					connect.static(require('path').resolve('.tmp'))
				];
			}
		}
	},
	dist: {
		options: {
			middleware: function (connect) {
				return [
					connect.static(require('path').resolve('<%= pkg.properties.paths.dist %>'))
				];
			}
		}
	}
}
