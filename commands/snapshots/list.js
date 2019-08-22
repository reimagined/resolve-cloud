const columnify = require('columnify')
const chalk = require('chalk')
const refreshToken = require('../../refreshToken')
const { get } = require('../../api/client')
const { out } = require('../../utils/std')

const handler = refreshToken(async (token, { deployment }) => {
  const { result } = await get(token, `deployments/${deployment}/snapshots`)
  if (result) {
    out(
      columnify(result, {
        minWidth: 30,
        columns: ['name', 'date', 'link']
      })
    )
  }
})

module.exports = {
  handler,
  command: 'list <deployment>',
  aliases: ['ls', '$0'],
  describe: chalk.green("display a list of an application's event store snapshots"),
  builder: yargs =>
    yargs.positional('deployment', {
      describe: chalk.green("an existing deployment's id"),
      type: 'string'
    })
}
