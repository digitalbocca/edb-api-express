'use strict'

const chalk = require('chalk')

const errorRes = info => {
  const { res, message, module } = info
  console.log(`${new Date().toLocaleString()} ${chalk.white.bgRed('DETECTADO UM ERRO')} ${chalk.red(module)}`)
  console.log(`${chalk.black.bgRedBright(module)} - ${message}`)
  res.status(500).json({
    status: 500,
    msg: message
  })
}

module.exports = errorRes
