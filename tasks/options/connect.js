var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
 
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
					mountFolder(connect, '.tmp'),
					mountFolder(connect, '<%= pkg.properties.paths.app %>')
				];
			}
		}
	},
	test: {
		options: {
			middleware: function (connect) {
				return [
					mountFolder(connect, 'test'),
					mountFolder(connect, '.tmp')
				];
			}
		}
	},
	dist: {
		options: {
			middleware: function (connect) {
				return [
			    		mountFolder(connect, '<%= pkg.properties.paths.dist %>')
				];
			}
		}
	}
}
