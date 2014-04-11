//
// Replace text patterns with applause.
//
// https://github.com/outaTiME/grunt-replace
//
module.exports = {
	"app": {
		"options": {
			// This is the old way to define patterns using plain object (simple variable lookup mechanism and no regexp support), 
			// you can still using but for more control you should use the new patterns way.
			"variables": {
				"ember": "vendor/ember/ember.js", // replaces "@@ember" to "vendor/ember/ember.js"
				"emberData": "vendor/ember-data/ember-data.js"
			}
		},
		"files": [{
			// files to perform replace on
			"src": "<%= pkg.properties.paths.app %>/index.html",
			"dest": ".tmp/index.html"
		}]
	},
	"dist": {
		"options": {
			"variables": {
				"ember": "vendor/ember/ember.prod.js",
				"emberData": "vendor/ember-data/ember-data.prod.js"
			}
		},
		"files": [{
			"src": "<%= pkg.properties.paths.app %>/index.html",
			"dest": ".tmp/index.html"
		}]
	}
}
