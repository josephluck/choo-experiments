const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  const checkAuth = () => {
    if (!state.auth.accessToken) {
      send('location:set', 'login')
      return html`<div></div>`
    }

    send('auth:check', {
      onError: () => {
        send('location:set', 'login')
      }
    })
  }

  if (prev && state.location.pathname !== prev.location.pathname) {
    checkAuth()
  }

  return html`
    <div onload=${checkAuth}>
      ${child(state, prev, send)}
    </div>
  `
}
