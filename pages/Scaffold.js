const html = require('choo/html')
const MainNav = require('../components/MainNav')

module.exports = (child = () => {}) => (state, prev, send) => {
  const onLogout = () => {
    send('auth:clearTokens')
    send('location:set', 'login')
  }

  return html`
    <div
      class=${`
        mdl-layout
        mdl-layout--fixed-header
        is-upgraded
      `}
    >
      ${MainNav({
        user: state.user.user,
        onLogout,
        currentRoute: state.location.pathname
      })}
      ${child(state, prev, send)}
    </div>
  `
}
