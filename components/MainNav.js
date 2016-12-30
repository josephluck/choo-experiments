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
        tabs: [
          {
            label: 'Dashboard',
            href: '/dashboard'
          },
          {
            label: 'Todos',
            href: '/todos'
          }
        ]
      })}

      <br />
      <a onclick=${onLogoutClick}>Logout</a>
    </div>
  `
}
