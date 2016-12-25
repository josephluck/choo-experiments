const html = require('choo/html')

module.exports = ({ title }) => {
  return html`
    <h1>${title}</h1>
  `
}
