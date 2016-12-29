const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  if (!state.auth.accessToken) {
    send('location:set', 'login')
    return html`<div></div>`
  }

  send('auth:check', {
    onError: () => {
      send('location:set', 'login')
    }
  })

  return html`${child(state, prev, send)}`
}
