const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { post } = require('../../api/client')

const handler = refreshToken(async (token, { deployment, snapshot }) =>
  post(token, `deployments/${deployment}/snapshots/${snapshot}/import`)
)

module.exports = {
  handler,
  command: 'import <deployment> <snapshot>',
  describe: chalk.green('import an existing snapshot to the event store'),
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
      .option('silent', {
        alias: 's',
        describe: 'disable user prompts',
        type: 'boolean'
      })
}
