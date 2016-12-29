const store = require('./store')

module.exports = () => ({
  onStateChange: function (state) {
    store.state = state
  },

  wrapEffects: function (fn) {
    return (state, payload, send, done) => {
      state['$root'] = store.state
      fn(state, payload, send, done)
    }
  }
})
