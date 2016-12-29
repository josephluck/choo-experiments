const store = require('./store')

module.exports = () => ({
  onStateChange: function (state) {
    store.state = state
  }
})
