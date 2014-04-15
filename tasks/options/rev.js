//
// Static file asset revisioning through content hashing. Use the rev task together with grunt-usemin for 
// cache busting of static files in your app. This allows them to be cached forever by the browser.
//
// https://github.com/cbas/grunt-rev
//
module.exports = {
	"dist": {
		"files": {
			"src": [
				"dist/scripts/{,*/}*.js",
				"dist/styles/{,*/}*.css",
				"dist/images/{,*/}*.{png,jpg,jpeg,gif,webp}",
				"dist/styles/fonts/*"
			]
		}
	}
}
