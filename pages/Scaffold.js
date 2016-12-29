const html = require('choo/html')

const MainNav = require('../components/MainNav')

module.exports = (child = () => {}) => (state, prev, send) => {
  return html`
    <div>
      ${MainNav({
        user: state.user.user
      })}
      ${child(state, prev, send)}
    </div>
  `
}
