module.exports = {
  "dist": {
    "options": {},
    "files": [
      {
        "expand": true,
        "cwd": "<%= pkg.properties.paths.app %>",
        "src": "*.html",
        "dest": "<%= pkg.properties.paths.dist %>"
      }
    ]
  }
}
