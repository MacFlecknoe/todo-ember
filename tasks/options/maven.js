//
// Install artifacts locally or deploy and release articats to maven repository
//
// https://github.com/smh/grunt-maven-tasks
//
module.exports = {
	options: { 
		groupId: 'com.jnj.wp', 
		artifactId: '<%= pkg.name %>'
	},
	debug: {
		options: {
			goal: 'deploy',
			repositoryId: 'snapshot-local',
			url: 'http://localhost:8081/artifactory/libs-snapshot-local'
		},
		src: [ '<%= pkg.properties.paths.dist %>/**' ]
	},
	release: {
		options: {
			goal: 'release',
			repositoryId: 'libs-release-local',
			url: 'http://localhost:8081/artifactory/libs-release-local'
		},
		src: [ '<%= pkg.properties.paths.dist %>/**' ]
	}
}
