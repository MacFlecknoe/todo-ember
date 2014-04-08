module.exports = {
  "app": {
    "options": {
      "variables": {
        "ember": "vendor/ember/ember.js",
        "emberData": "vendor/ember-data/ember-data.js"
      }
    },
    "files": [
      {
        "src": "<%= pkg.properties.paths.app %>/index.html",
        "dest": ".tmp/index.html"
      }
    ]
  },
  "dist": {
    "options": {
      "variables": {
        "ember": "vendor/ember/ember.prod.js",
        "emberData": "vendor/ember-data/ember-data.prod.js"
      }
    },
    "files": [
      {
        "src": "<%= pkg.properties.paths.app %>/index.html",
        "dest": ".tmp/index.html"
      }
    ]
  }
}
