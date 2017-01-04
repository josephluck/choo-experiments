let store = require('./store')

module.exports = () => ({
  init (models) {
    const state = models.reduce((prev, curr) => {
      if (curr.namespace) {
        return { ...prev, [curr.namespace]: curr.state }
      }
      return { ...prev, ...curr.state }
    }, {})

    store.update(state)
  },

  onStateChange: function (state) {
    store.update(state)
  },

  wrapEffects: function (fn) {
    // This might be expensive.
    // This'll create a new global state object every time
    // an effect is called.
    // Consider refactoring app if performance is a problem
    return (state, payload, send, done) => {
      fn({ ...state, $root: store.state }, payload, send, done)
    }
  }
})
