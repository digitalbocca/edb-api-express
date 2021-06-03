'use strict'

const chalk = require('chalk')

const simpleLogger = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} ${chalk.black.bgGreen(req.method)} ${chalk.green(req.url)}`)
  next()
}

module.exports = simpleLogger
