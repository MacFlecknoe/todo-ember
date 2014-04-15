//
// Open urls and files from a grunt task. 
//
// https://github.com/jsoverson/grunt-open
//
module.exports = {
	all: {
		// opens a web browser to the hosted application for viewing
		path: 'http://<%= pkg.properties.servers.app.hostname %>:<%= pkg.properties.servers.app.port %>'
	}
}
