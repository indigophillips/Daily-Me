const express = require('express')

const server = express()

const sushi = require('./routes/sushi')

server.use(express.static('public'))

server.use('/api/v1/sushi', sushi)

module.exports = server
