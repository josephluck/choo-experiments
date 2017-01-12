import html from 'choo/html'
import Tabs from './Tabs'

const noop = () => {}

export default ({
  user,
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
        >
          Logout
        </a>
      </div>

      ${Tabs({
        activeRoute: currentRoute,
        activeClass: '',
        tabs: [
          {
            label: 'Dashboard',
            href: '/dashboard'
          },
          {
            label: 'Map',
            href: '/map'
          }
        ]
      })}
    </div>
  `
}
