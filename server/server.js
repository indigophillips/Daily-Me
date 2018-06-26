const express = require('express')
const server = express()
const sushi = require('./routes/sushi')
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/sushi', sushi)

module.exports = server
