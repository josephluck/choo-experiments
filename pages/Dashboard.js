const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  return html`
    <div>
      <h1 class="mdc-typography--display1">Welcome ${state.user.user.name}</h1>
      ${child(state, prev, send)}
    </div>
  `
}
