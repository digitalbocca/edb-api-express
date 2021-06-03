'use strict'

const cfonts = require('cfonts')
const chalk = require('chalk')

const runMessage = port => {
  console.clear()

  cfonts.say('edb', {
    font: 'block',
    colors: ['#ffffff', /* '#f19b2c', */'#b97722'],
    align: 'center',
    lineHeight: 0
  })

  cfonts.say('2021 - Estudio Digital Bocca', {
    font: 'console',
    colors: ['#f19b2c'],
    align: 'center'
  })

  console.log(`Servidor rodando na porta ${chalk.green(port)}\n`)
}

module.exports = runMessage
