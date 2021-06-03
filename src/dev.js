'use strict'

const setup = require('./modules/config')

require('dotenv').config()

const checkSetup = () => {
  setup()
  setTimeout(() => {
    require('./index')
  }, 3000)
}

checkSetup()
