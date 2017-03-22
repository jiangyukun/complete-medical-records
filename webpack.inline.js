const path = require('path')
const webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  devServer: {
    host: '192.168.18.112',
    hot: true,
    reload: true,
    inline: true,
    overlay: true,
    port: 3000
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://192.168.18.112:3000/static/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"inline"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|png)$/, loader: "url-loader?limit=8192"},
      {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"}
    ]
  }
}
