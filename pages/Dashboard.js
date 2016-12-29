const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  return html`
    <div>
      <a href="/todos">Todos</a>
      <a href="/login">Login</a>
      <h1>Welcome ${state.user.user.name}</h1>
      ${child(state, prev, send)}
    </div>
  `
}
