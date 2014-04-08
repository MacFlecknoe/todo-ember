module.exports = {
  options: {
    sassDir: "<%= pkg.properties.paths.app %>/styles",
    cssDir: ".tmp/styles",
    generatedImagesDir: ".tmp/images/generated",
    imagesDir: "<%= pkg.properties.paths.app %>/images",
    javascriptsDir: "<%= pkg.properties.paths.app %>/scripts",
    fontsDir: "<%= pkg.properties.paths.app %>/styles/fonts",
    importPath: "<%= pkg.properties.paths.app %>/vendor",
    httpImagesPath: "/images",
    httpGeneratedImagesPath: "/images/generated",
    httpFontsPath: "/styles/fonts",
    relativeAssets: false
  },
  dist: {},
  server: {
    options: {
      debugInfo: true
    }
  }
}
