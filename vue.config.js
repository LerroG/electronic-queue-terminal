const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'design',
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV == 'production'
  ? '/design/'
  : '/design/',
})
