var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = {
	options: {
		port: '<%= ports.livereload %>',
		hostname: '<%= hostname %>'
	},
	livereload: {
		options: {
			middleware: function (connect) {
				return [
					lrSnippet,
					mountFolder(connect, '.tmp'),
					mountFolder(connect, '<%= paths.app %>')
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
			    		mountFolder(connect, '<%= paths.dist %>')
				];
			}
		}
	}
}
