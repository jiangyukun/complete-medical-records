const path = require('path')
const webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  devServer: {
    host: '192.168.18.148',
    hot: true,
    inline: true,
    overlay: true,
    port: 3001
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://192.168.18.148:3001/static/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"inline"'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: "url-loader?limit=8192"},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: "file-loader"}
    ]
  }
}
