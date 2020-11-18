'use strict'

const cors = require('cors')
const express = require('express')

const app = express()

const main = require('./services/main/')

app.use(cors())
app.use(express.json())

app.use('/', main)

app.listen(process.env.PORT, () => console.log(`Servidor EDB iniciado na porta: ${process.env.PORT}`))
