const store = require('./store')

module.exports = () => ({
  onStateChange: function (state) {
    store.state = state
  },

  wrapEffects: function (fn) {
    return (state, payload, send, done) => {
      const newState = { ...state, $root: store.state }
      fn(newState, payload, send, done)
    }
  }
})
