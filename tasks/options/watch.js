module.exports = {
  "emberTemplates": {
    "files": "<%= paths.app %>/templates/**/*.hbs",
    "tasks": [
      "emberTemplates"
    ]
  },
  "compass": {
    "files": [
      "<%= paths.app %>/styles/{,*/}*.{scss,sass}"
    ],
    "tasks": [
      "compass:server"
    ]
  },
  "neuter": {
    "files": [
      "<%= paths.app %>/scripts/{,*/}*.js"
    ],
    "tasks": [
      "jshint",
      "neuter"
    ]
  },
  "livereload": {
    "options": {
      "livereload": '<%= ports.livereload %>'
    },
    "files": [
      ".tmp/scripts/*.js",
      "<%= paths.app %>/*.html",
      "{.tmp,<%= paths.app %>}/styles/{,*/}*.css",
      "<%= paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
    ]
  }
}
