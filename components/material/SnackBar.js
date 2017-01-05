const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host {
    position: fixed;
    bottom: 1rem;
    width: 50vw;
    left: 25%;
  }

  :host .snack {
    position: relative;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    background: #333333;
    color: white;
    box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateY(10px);
  }

  :host .snack.--is-showing {
    opacity: 1;
    transform: translateY(0px);
  }
`

module.exports = ({
  showing = false,
  message = '',
  className = ''
}) => {
  return html`
    <div
      class=${`
        ${prefix}
        ${className}
      `}
    >
      <div
        class=${`
          snack
          ${showing ? '--is-showing' : ''}
        `}
      >
        ${message}
      </div>
    </div>
  `
}
