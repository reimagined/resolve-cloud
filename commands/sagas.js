const chalk = require('chalk')

module.exports = {
  command: 'sagas',
  describe: chalk.green("manage an application's sagas"),
  builder: yargs => yargs.commandDir('sagas')
}
