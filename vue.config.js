const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/CodeHub/" : "/",
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }
})
