//
// Compass is an open-source authoring framework for the Sass css preprocessor. It helps you build stylesheets faster with a 
// huge library of Sass mixins and functions and advanced tools for spriting.
// https://github.com/gruntjs/grunt-contrib-compass
//
module.exports = {
	options: {
		// The source directory where you keep your Sass stylesheets.
		sassDir: "<%= pkg.properties.paths.app %>/styles",
		//  The target directory where you keep your CSS stylesheets.
		cssDir: ".tmp/styles",
		// The directory where generated images are kept. 
		generatedImagesDir: ".tmp/images/generated",
		// The directory where you keep your images.
		imagesDir: "<%= pkg.properties.paths.app %>/images",
		// The directory where you keep your JavaScript files.
		javascriptsDir: "<%= pkg.properties.paths.app %>/scripts",
		// The directory where you keep your fonts.
		fontsDir: "<%= pkg.properties.paths.app %>/styles/fonts",
		// Makes files under the specified folder findable by Sass's @import directive.
		importPath: "<%= pkg.properties.paths.app %>/vendor",
		// The full http path to images on the web server. Default: httpPath + "/" + imagesDir (is this needed?)
		httpImagesPath: "/images",
		// The full http path to generated images on the web server.
		httpGeneratedImagesPath: "/images/generated",
		// The full http path to font files on the web server.
		httpFontsPath: "/styles/fonts",
		// Make Compass asset helpers generate relative urls to assets.
		relativeAssets: false
	},
	release: {
	},
	debug: {
		options: {
			debugInfo: true
		}
	}
}
