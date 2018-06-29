const express = require('express')
const server = express()
const path = require('path')
const tasks = require('./routes/tasks')
const weather = require('./routes/weather')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/tasks', tasks)
server.use('/api/v1/weather', weather)

module.exports = server
