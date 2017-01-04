const html = require('choo/html')

module.exports = ({
  messages = []
}) => {
  if (messages) {
    return messages.map((message) => {
      return html`
        <p class="mdl-textfield__error">
          ${message}
        </p>
      `
    })
  }

  return null
}
