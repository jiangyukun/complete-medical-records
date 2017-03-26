/**
 * Created by jiangyu2016 on 2016/12/15.
 */

var fs = require('fs')
var result = ''

module.exports = function (app) {
  app.get('/archives/patient/completionAssayResultDetail/12345678911', function (req, res) {

    fs.readFile(__dirname + '/mother-page4.json', function (err, data) {
      result = data.toString()
      res.json(JSON.parse(result))
    })


  })

}
