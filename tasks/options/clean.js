//
// Clean files and folders.
//
// https://github.com/gruntjs/grunt-contrib-clean
//
module.exports = {
	all: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= pkg.properties.paths.dist %>/*',
				'!<%= pkg.properties.paths.dist %>/.git*'
			]
		}]
	}
};
