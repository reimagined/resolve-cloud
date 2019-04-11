const log = require('consola')

const { truncateLogs } = require('../utils/api')

module.exports = async ({ name }, applicationName) => {
  if (!name) {
    log.error('Please specify application name')
    return
  }

  try {
    const output = await truncateLogs({
      applicationName: applicationName || name
    })
    log.info(output)
  } catch (e) {
    if (e.response && e.response.data) {
      log.error(e.response.data)
    } else {
      log.error(e.message)
    }
  }
}
