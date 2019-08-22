const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { del } = require('../../api/client')

const handler = refreshToken(async (token, { deployment, snapshot }) =>
  del(token, `deployments/${deployment}/snapshots/${snapshot}`)
)

module.exports = {
  handler,
  command: 'remove <deployment> <snapshot>',
  describe: chalk.green('delete an event store snapshot'),
  aliases: ['rm'],
  builder: yargs =>
    yargs
      .positional('deployment', {
        describe: chalk.green("an existing deployment's id"),
        type: 'string'
      })
      .positional('snapshot', {
        describe: chalk.green("an existing snapshot's name"),
        type: 'string'
      })
}
