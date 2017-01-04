const html = require('choo/html')
const noop = () => {}

const Tabs = require('./tabs')

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
    <div>
      Hello ${user.name}

      ${Tabs({
        activeRoute: currentRoute,
        activeClass: 'i',
        tabs: [
          {
            label: 'Dashboard',
            href: '/dashboard'
          }
        ]
      })}

      <br />

      <a
        onclick=${onLogoutClick}
      >
        Logout
      </a>
    </div>
  `
}
