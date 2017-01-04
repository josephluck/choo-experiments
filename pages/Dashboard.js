const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  return html`
    <div>
      <a href="/tenancies/create">Create Tenancy</a>
      ${child(state, prev, send)}
    </div>
  `
}
