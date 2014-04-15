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
				'dist/*',
				'!dist/.git*'
			]
		}]
	}
};
