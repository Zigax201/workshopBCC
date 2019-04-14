const express = require('express')
const app = express()
const posts = require('./note')
app.use(posts)

module.exports = app