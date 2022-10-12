const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/token': {
        target: 'https://account.kkbox.com/oauth2/token',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
module.exports = {
  publicPath: '/carplay/'
}