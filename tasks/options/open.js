//
// Open urls and files from a grunt task. 
//
// https://github.com/jsoverson/grunt-open
//
module.exports = {
	all: {
		// opens a web browser to the hosted application for viewing
		path: 'http://<%= pkg.config.servers.app.hostname %>:<%= pkg.config.servers.app.port %>'
	}
}
