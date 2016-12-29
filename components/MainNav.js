const html = require('choo/html')

module.exports = ({
  user = {}
}) => {
  return html`
    <div>
      Hello ${user.name}
      <a href="dashboard">Dashboard</a>
      <a href="todos">Todos</a>
      <a>Logout</a>
    </div>
  `
}
