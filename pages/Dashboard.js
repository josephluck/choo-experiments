const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  console.log(state)
  return html`
    <div>
      <h1>Welcome ${state.user.user.name}</h1>
      ${child(state, prev, send)}
    </div>
  `
}
