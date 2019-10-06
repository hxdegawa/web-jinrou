const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.redirect('/')
})

module.exports = {
  path: '/api/fucking',
  handler: app
}
