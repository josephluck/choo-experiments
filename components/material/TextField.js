const html = require('choo/html')
const css = require('sheetify')
const noop = () => {}
const Validation = require('./Validation')

const prefix = css`
  :host {
    position: relative;
    margin-top: 30px;
  }

  :host input {
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: solid 1px #e0e0e0;
    transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    padding: 3px 0px;
    box-shadow: 0px 1px 0px 0px transparent;
  }

  :host label {
    pointer-events: none;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    color: #a7a7a7;
    font-weight: 300;
    transform-origin: left;
    transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }

  :host input:focus {
    outline: none;
    border-bottom-color: #39a9f4;
    box-shadow: 0px 1px 0px 0px #39a9f4;
  }
  :host input:focus + label,
  :host input.--has-value + label {
    transform: translateY(-100%) scale(0.7, 0.7);
    color: #39a9f4;
  }

  :host input:disabled {
    cursor: not-allowed;
    border-bottom-style: dotted;
    border-bottom-width: 2px;
    border-bottom-color: #b3b3b3;
  }
`

module.exports = ({
  value = '',
  type = 'text',
  onChange = noop,
  label = '',
  validation = [],
  className = '',
  disabled = false
}) => {
  const onInput = e => onChange(e.target.value)

  return html`
    <div
      class=${prefix}
    >
      <input
        type=${type}
        value=${value}
        oninput=${onInput}
        disabled=${disabled}
        class=${`
          ${value.length ? '--has-value' : ''}
        `}
      />
      <label>
        ${label}
      </label>
      ${Validation({
        messages: validation
      })}
    </div>
  `
}
