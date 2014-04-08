module.exports = {
  "dist": {
    "files": {
      "<%= pkg.properties.paths.dist %>/styles/main.css": [
        ".tmp/styles/{,*/}*.css",
        "<%= pkg.properties.paths.app %>/styles/{,*/}*.css"
      ]
    }
  }
}
