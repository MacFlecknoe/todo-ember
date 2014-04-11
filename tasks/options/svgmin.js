//
// Minify SVG using SVGO
//
// https://github.com/sindresorhus/grunt-svgmin
//
module.exports = {
	"dist": {
		"files": [{
			"expand": true,
			"cwd": "<%= pkg.properties.paths.app %>/images",
			"src": "{,*/}*.svg",
			"dest": ".tmp/images"
		}]
	}
}
