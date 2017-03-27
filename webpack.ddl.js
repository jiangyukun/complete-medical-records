/**
 * 将类库代码单独打包
 * Created by jiangyukun on 2016/12/9.
 */
const path = require('path')
const webpack = require('webpack')
const moment = require('moment')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const vendors = [
  "babel-polyfill",
  "isomorphic-fetch",
  "classnames",
  "dom-helpers",
  "immutable",
  "react",
  "react-dom",
  "react-redux",
  "redux"
]

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'lib-' + moment().format('MMDD') + '.min.js',
    library: '[name]'
  },
  entry: {
    "lib": vendors
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader']})},
      {test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},
      {test: /\.svg$/, loader: "file-loader"}
    ]
  },

  plugins: [
    new ExtractTextPlugin('common-' + moment().format('MMDD') + '.css'),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname,
    })
  ],
}
