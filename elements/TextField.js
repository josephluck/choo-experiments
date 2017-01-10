const html = require('choo/html')
const css = require('sheetify')
const noop = () => {}
const Validation = require('./Validation')

const prefix = css`
  :host {
    position: relative;
    padding-top: 2rem;
  }

  :host input {
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: solid 1px #e0e0e0;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    padding: 0rem 0px 0.5rem;
    box-shadow: 0px 1px 0px 0px transparent;
    width: 100%;
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
    transform-origin: left;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }

  :host input:focus {
    outline: none;
    border-bottom-color: rgba(57, 169, 244, 1);
    box-shadow: 0px 1px 0px 0px rgba(57, 169, 244, 0.45);
  }
  :host input:focus + label {
    color: rgba(57, 169, 244, 1);
  }
  :host input:focus + label,
  :host input.--has-value + label {
    font-size: 0.7em;
    transform: translateY(-100%);
  }

  :host input.--is-invalid {
    border-color: rgba(243, 67, 54, 1);
  }
  :host input.--is-invalid:focus {
    box-shadow: 0px 1px 0px 0px rgba(243, 67, 54, 0.45);
  }
  :host input.--is-invalid:focus + label {
    color: rgba(243, 67, 54, 1);
  }

  :host input:disabled {
    cursor: not-allowed;
    border-bottom-style: dotted;
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
      class=${`
        ${prefix}
        ${className}
      `}
    >
      <div class="relative">
        <input
          type=${type}
          value=${value}
          oninput=${onInput}
          disabled=${disabled}
          class=${`
            ${value.length ? '--has-value' : ''}
            ${validation && validation.length ? '--is-invalid' : ''}
          `}
        />
        <label>
          ${label}
        </label>
      </div>
      ${Validation({
        messages: validation
      })}
    </div>
  `
}
