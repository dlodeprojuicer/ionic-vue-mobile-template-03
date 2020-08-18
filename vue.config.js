module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    }
  },
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
