let truncateLogs = jest.fn().mockReturnValue({})

jest.doMock('../../../utils/api', () => ({
  truncateLogs: (...args) => truncateLogs(...args)
}))

const handler = require('../../../commands/truncateLogs')
const log = require('consola')

const app = { name: 'name-from-package-json', version: '0.0.1' }

beforeEach(() => {
  truncateLogs.mockClear()
  log.info.mockClear()
  log.error.mockClear()
})

test('default invoke', async () => {
  await handler(app, null)
  expect(truncateLogs).toBeCalledWith({ applicationName: 'name-from-package-json' })
  expect(log.info).toBeCalledWith({})
})

test('get logs from another deployment', async () => {
  await handler(app, 'app-2')
  expect(truncateLogs).toBeCalledWith({ applicationName: 'app-2' })
  expect(log.info).toBeCalledWith({})
})

test('request failure', async () => {
  truncateLogs = () => Promise.reject(Error('oops'))

  await handler(app, null)
  expect(log.error).toBeCalledWith('oops')
  expect(log.info).not.toBeCalled()
})
