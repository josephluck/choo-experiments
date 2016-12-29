const store = require('./store')

module.exports = () => ({
  onStateChange: function (state) {
    store.state = state
  },

  wrapEffects: function (fn) {
    // This might be expensive.
    // This'll create a new global state object every time
    // an effect is called.
    // Consider refactoring app if performance is a problem
    return (state, payload, send, done) => {
      fn({
        ...state,
        $root: store.state
      }, payload, send, done)
    }
  }
})
