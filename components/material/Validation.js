const html = require('choo/html')

module.exports = ({
  messages = []
}) => {
  if (messages) {
    return messages.map((message) => {
      return html`
        <p class="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg">
          ${message}
        </p>
      `
    })
  }

  return null
}
