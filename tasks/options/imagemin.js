module.exports = {
  "dist": {
    "files": [
      {
        "expand": true,
        "cwd": "<%= paths.app %>/images",
        "src": "{,*/}*.{png,jpg,jpeg}",
        "dest": "<%= paths.dist %>/images"
      }
    ]
  }
}
