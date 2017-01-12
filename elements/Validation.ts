import html from 'choo/html'
// import * as cx from 'sheetify'

// const prefix = cx`
//   :host {
//     color: #f34336;
//     transform-origin: left;
//     font-size: 0.7rem;
//     padding: 0.25rem 0px;
//   }
// `
const prefix = 'validation'

export default ({
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
