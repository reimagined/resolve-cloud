const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { post } = require('../../api/client')

const handler = refreshToken(async (token, { deployment }) =>
  post(token, `deployments/${deployment}/snapshots/upload`)
)

module.exports = {
  handler,
  command: 'create <deployment>',
  describe: chalk.green('upload event store snapshot to the cloud storage'),
  builder: yargs =>
    yargs
      .positional('deployment', {
        describe: chalk.green("an existing deployment's id"),
        type: 'string'
      })
      .option('name', {
        alias: 'n',
        describe: 'a name for the snapshot',
        type: 'string'
      })
}
