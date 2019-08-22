const columnify = require('columnify')
const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { get } = require('../../api/client')
const { out } = require('../../utils/std')

const handler = refreshToken(async (token, { deployment, snapshot }) => {
  const {
    result: { downloadLink }
  } = await get(token, `deployments/${deployment}/snapshots/${snapshot}`)
  console.log(`downloading ${downloadLink}`)
})

module.exports = {
  handler,
  command: 'download <deployment> <snapshot>',
  describe: chalk.green('download specific snapshot to a local host'),
  builder: yargs =>
    yargs
      .positional('deployment', {
        describe: chalk.green("an existing deployment's id"),
        type: 'string'
      })
      .positional('snapshot', {
        describe: chalk.green("an existing snapshot's id"),
        type: 'string'
      })
      .option('output', {
        alias: 'o',
        describe: 'specific file to write to (stdout by default)',
        type: 'string'
      })
}
