//
// Concatenate files in the order you "require" them in your src file.
//
// https://github.com/trek/grunt-neuter
//
module.exports = {
	all: {
		options: {
			// specifying a base path allows you to omit said portion of the filepath from your require statements
			basePath: 'app/'
		},
		// source file with require statements
		src: 'app/scripts/app.js',
		dest: '.tmp/scripts/combined-scripts.js'
	}
}
