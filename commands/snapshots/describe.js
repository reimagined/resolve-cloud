const columnify = require('columnify')
const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { get } = require('../../api/client')
const { out } = require('../../utils/std')

const handler = refreshToken(async (token, { deployment, snapshot }) => {
  const { result } = await get(token, `deployments/${deployment}/snapshots/${snapshot}`)
  if (result) {
    out(
      columnify(result, {
        minWidth: 30,
        columns: ['name', 'date', 'downloadLink']
      })
    )
  }
})

module.exports = {
  handler,
  command: 'describe <deployment> <snapshot>',
  describe: chalk.green('display a detailed info about specific snapshot'),
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
}
