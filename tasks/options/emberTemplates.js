//
// Precompile Handlebars templates for Ember.js.
// https://github.com/dgeb/grunt-ember-templates
//
module.exports = {
	"options": {
    	templateBasePath: '<%= pkg.properties.paths.app %>/templates/'
	},
	"dist": {
		// This defines what files this task will process. The first value should contain the destination. The second value 
		// (source) should be a filepath or an array of filepaths (supports minimatch).
		"files": {
			".tmp/scripts/compiled-templates.js": "<%= pkg.properties.paths.app %>/templates/{,*/}*.hbs"
		}
	}
}
