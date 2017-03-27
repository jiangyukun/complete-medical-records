const webpack = require('webpack')
const moment = require('moment')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname + '/build/prod/',
    // path: 'D:/2017/company/app-parent/frontend-web/src/main/webapp/complete-medicine-records/build/prod/',
    filename: 'bundle-' + moment().format('MMDD') + '.min.js',
    publicPath: '/frontend/complete-medicine-records/build/prod/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader']})},
      {test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},
      {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"}
    ]
  },

  plugins: [
    new ExtractTextPlugin('style-' + moment().format('MMDD') + '.min.css'),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
}
