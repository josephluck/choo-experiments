const html = require('choo/html')
const css = require('sheetify')
const noop = () => {}

const prefix = css`
  :host {
    background: #3096f3;
    color: white;
    border: 0px;
    border-radius: 2px;
    padding: 0px 16px;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    text-transform: uppercase;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-shadow: 0px 4px 2px -2px transparent;
    display: inline-block;
  }
  :host:active {
    box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.2);
  }
  :host:focus {
    outline: none;
  }
`

const Button = ({
  className = '',
  label = '',
  type = 'button',
  onClick = noop
}) => {
  return html`
    <button
      class=${`
        ${prefix}
        ${className}
      `}
      type=${type}
      onclick=${onClick}
    >
      ${label}
    </button>
  `
}

module.exports = Button
