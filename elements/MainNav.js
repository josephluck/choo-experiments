const html = require('choo/html')
const noop = () => {}

const Tabs = require('./Tabs')

module.exports = ({
  user = {},
  onLogout = noop,
  currentRoute = ''
}) => {
  const onLogoutClick = (e) => {
    e.preventDefault()
    onLogout()
  }

  return html`
    <div
      class="mdl-layout__header"
    >
      <div
        class="mdl-layout__header-row"
      >
        <span
          class="mdl-layout-title"
        >
          Hello ${user.name}
        </span>

        <div class="mdl-layout-spacer"></div>

        <a
          onclick=${onLogoutClick}
          class="white"
        >
          Logout
        </a>
      </div>

      ${Tabs({
        activeRoute: currentRoute,
        tabs: [
          {
            label: 'Dashboard',
            href: '/dashboard'
          }
        ]
      })}
    </div>
  `
}
