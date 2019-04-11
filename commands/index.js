const deploy = require('./deploy')
const remove = require('./remove')
const login = require('./login')
const logs = require('./logs')
const truncateLogs = require('./truncateLogs')
const addSecret = require('./addSecret')
const deleteSecret = require('./deleteSecret')
const deployments = require('./deployments')
const readModel = require('./readModel')

module.exports = {
  deploy,
  remove,
  login,
  logs,
  truncateLogs,
  addSecret,
  deleteSecret,
  deployments,
  readModel
}
