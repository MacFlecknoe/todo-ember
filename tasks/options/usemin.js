//
// The usemin task has 2 actions:
// 1. First it replaces all the blocks with a single summary line, pointing to a file created by the transformation flow.
// 2. Then it looks for references to assets (i.e. images, scripts, ...), and tries to replace them with their reved version if it can find one on disk
//
// UseminPrepare is launched first, then the steps of the transformation flow (for example, concat, uglify, and cssmin), and then, 
// in the end usemin is launched.
//
// https://github.com/yeoman/grunt-usemin
//
module.exports = {
	options: {
		dirs: [
			'dist'
		]
	},
	html: [
		'dist/{,*/}*.html'
	],
	css: [
		'dist/styles/{,*/}*.css'
	]
}
