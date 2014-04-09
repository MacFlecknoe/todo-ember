//
// Files are compressed with clean-css.
// https://github.com/gruntjs/grunt-contrib-cssmin
//
module.exports = {
	"dist": {
		// combine files into one output file
		"files": {
			"<%= pkg.properties.paths.dist %>/styles/main.css": [
				".tmp/styles/{,*/}*.css",
				"<%= pkg.properties.paths.app %>/styles/{,*/}*.css"
			]
		}
	}
}
