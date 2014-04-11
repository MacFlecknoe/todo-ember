//
// Updates the grunt configuration to apply a configured transformation flow to tagged files (i.e. blocks). By default the 
// transformation flow is composed of concat and uglifyjs for JS files.
//
// UseminPrepare is launched first, then the steps of the transformation flow (for example, concat, uglify, and cssmin), and then, 
// in the end usemin is launched.
//
// https://github.com/yeoman/grunt-usemin
//
module.exports = {
	options: {
		// the root directory from which your files will be resolved.
		root: '<%= pkg.properties.paths.app %>',
		// base directory where the transformed files should be output.
		dest: '.tmp'
	},
	// useminPrepare only uses only one target: html, with a list of the concerned files. useMinPrepare will 
	// operate on script files includes in the files listed here
	html: '.tmp/index.html'
}
