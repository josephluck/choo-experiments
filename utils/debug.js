const store = require('./store')

module.exports = {
  onError: function (err, state, createSend) {
    console.trace()
    console.groupCollapsed(`Error: ${err.message}`)
    console.error(err)
    console.groupEnd()
    const send = createSend('onError: ')
    send('app:error', err)
  },
  onAction: function (state, data, name, caller, createSend) {
    console.groupCollapsed(`Action: ${caller} -> ${name}`)
    console.log(data)
    console.groupEnd()
  },
  onStateChange: function (state, data, prev, createSend) {
    store.state = state
    console.groupCollapsed('State')
    console.log(prev)
    console.log(state)
    console.groupEnd()
    console.info('--------------------------------')
  }
}
