const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    //hot: true,
    //before: require('./mock/'),
    proxy: {
      //"/api": "http://172.16.1.138:8080"
      '/api': {
        //target: 'https://m.douban.com',
        target: 'http://172.16.1.138:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
