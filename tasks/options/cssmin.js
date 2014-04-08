module.exports = {
  "dist": {
    "files": {
      "<%= paths.dist %>/styles/main.css": [
        ".tmp/styles/{,*/}*.css",
        "<%= paths.app %>/styles/{,*/}*.css"
      ]
    }
  }
}
