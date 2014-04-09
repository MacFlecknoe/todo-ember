//
// Open urls and files from a grunt task. 
// https://github.com/jsoverson/grunt-open
//
module.exports = {
	"server": {
		// opens a web browser to the hosted application for viewing
		"path": "http://<%= pkg.properties.hostname %>:<%= pkg.properties.ports.app %>"
	}
}
