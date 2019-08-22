
const chalk = require('chalk')

module.exports = {
  command: 'snapshots',
  describe: chalk.green("manage an application's event store's snapshots"),
  builder: yargs => yargs.commandDir('snapshots')
}
