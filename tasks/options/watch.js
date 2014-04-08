module.exports = {
  "emberTemplates": {
    "files": "<%= pkg.properties.paths.app %>/templates/**/*.hbs",
    "tasks": [
      "emberTemplates"
    ]
  },
  "compass": {
    "files": [
      "<%= pkg.properties.paths.app %>/styles/{,*/}*.{scss,sass}"
    ],
    "tasks": [
      "compass:server"
    ]
  },
  "neuter": {
    "files": [
      "<%= pkg.properties.paths.app %>/scripts/{,*/}*.js"
    ],
    "tasks": [
      "jshint",
      "neuter"
    ]
  },
  "livereload": {
    "options": {
      "livereload": '<%= pkg.properties.ports.livereload %>'
    },
    "files": [
      ".tmp/scripts/*.js",
      "<%= pkg.properties.paths.app %>/*.html",
      "{.tmp,<%= pkg.properties.paths.app %>}/styles/{,*/}*.css",
      "<%= pkg.properties.paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
    ]
  }
}
