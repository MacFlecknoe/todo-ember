module.exports = {
  "html": [
    "<%= pkg.properties.paths.dist %>/{,*/}*.html"
  ],
  "css": [
    "<%= pkg.properties.paths.dist %>/styles/{,*/}*.css"
  ],
  "options": {
    "dirs": [
      "<%= pkg.properties.paths.dist %>"
    ]
  }
}
