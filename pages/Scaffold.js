const html = require('choo/html')

const MainNav = require('../components/MainNav')

module.exports = (child = () => {}) => (state, prev, send) => {
  const onLogout = () => {
    send('auth:clearTokens')
    send('location:set', 'login')
  }

  return html`
    <div>
      ${MainNav({
        user: state.user.user,
        onLogout
      })}
      ${child(state, prev, send)}
    </div>
  `
}
