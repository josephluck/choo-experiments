const html = require('choo/html')

const css = require('sheetify')
const prefix = css`
  :host {
    color: #f34336;
    transform-origin: left;
    font-size: 0.7rem;
    padding: 0.25rem 0px;
  }
`

module.exports = ({
  messages = []
}) => {
  if (messages) {
    return messages.map((message) => {
      return html`
        <div
          class=${`
            ${prefix}
          `}
        >
          ${message}
        </div>
      `
    })
  }

  return null
}
