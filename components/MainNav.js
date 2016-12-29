const html = require('choo/html')

module.exports = ({
  user = {}
}) => {
  return html`
    <div>
      Hello ${user.name}
    </div>
  `
}
