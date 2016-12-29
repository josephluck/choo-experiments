const html = require('choo/html')
const noop = () => {}

module.exports = ({
  user = {},
  onLogout = noop
}) => {
  const onLogoutClick = (e) => {
    e.preventDefault()
    onLogout()
  }

  return html`
    <div>
      Hello ${user.name}
      <a href="dashboard">Dashboard</a>
      <a href="todos">Todos</a>
      <a onclick=${onLogoutClick}>Logout</a>
    </div>
  `
}
