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
				"<%= pkg.properties.paths.dist %>/scripts/{,*/}*.js",
				"<%= pkg.properties.paths.dist %>/styles/{,*/}*.css",
				"<%= pkg.properties.paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}",
				"<%= pkg.properties.paths.dist %>/styles/fonts/*"
			]
		}
	}
}
