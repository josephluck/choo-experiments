const transport = require('./transport')

module.exports = {
  login ({ payload }) {
    return transport.makeFormRequest({
      path: '/oauth/token',
      entity: {
        ...payload,
        grant_type: 'password'
      }
    })
  }
}
