const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  return html`
    <div>
      Tenancy form goes here
      ${child(state, prev, send)}
    </div>
  `
}
