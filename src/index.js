'use strict'

const cors = require('cors')
const express = require('express')

const runMessage = require('./modules/start-message')
const simpleLogger = require('./modules/simple-logger')

const app = express()

const main = require('./services/main/')

app.use(cors())
app.use(express.json())
app.use(simpleLogger)

app.use('/', main)

app.listen(process.env.PORT, runMessage(process.env.PORT))
