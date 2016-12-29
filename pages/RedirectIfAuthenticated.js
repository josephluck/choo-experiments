const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  const onLoad = () => {
    if (state.auth.accessToken) {
      console.info('Redirecting to dashboard')
      send('location:set', 'dashboard')
    }
  }

  return html`
    <div onload=${onLoad}>
      ${child(state, prev, send)}
    </div>
  `
}
