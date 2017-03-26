const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev')

const express = require('express')

let app = new express()
let port = 3000
let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('./'))

function toIndex(req, res) {
  res.sendFile(__dirname + '/index.html')
}

app.get('/mother', toIndex)
require('./controller')(app)

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
