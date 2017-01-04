const html = require('choo/html')
const css = require('sheetify')
const MainNav = require('../components/MainNav')

const prefix = css`
  :host {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: auto;
  }
`

module.exports = (child = () => {}) => (state, prev, send) => {
  const onLogout = () => {
    send('auth:clearTokens')
    send('location:set', 'login')
  }

  return html`
    <div class=${prefix}>
      ${MainNav({
        user: state.user.user,
        onLogout,
        currentRoute: state.location.pathname
      })}
      ${child(state, prev, send)}
    </div>
  `
}
