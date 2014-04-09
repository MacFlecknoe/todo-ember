module.exports = {
	options: {
		port: '<%= pkg.properties.ports.app %>',
		hostname: '<%= pkg.properties.hostname %>'
	},
	livereload: {
		options: {
			middleware: function (connect) {
				return [
					require('connect-livereload')({port: '35729'}), // what does this do? it wont resolve variables
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
