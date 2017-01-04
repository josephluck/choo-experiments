const html = require('choo/html')
const noop = () => {}

const Validation = ({
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

const showLabel = (elm) => () => {
  const label = elm.querySelector('label')
  elm.classList.add('mdc-textfield--focused')
  label.classList.add('mdc-textfield__label--float-above')
}

const hideLabel = (elm) => () => {
  const label = elm.querySelector('label')
  const input = elm.querySelector('input')
  elm.classList.remove('mdc-textfield--focused')
  if (!input.value.length) {
    label.classList.remove('mdc-textfield__label--float-above')
  }
}

const bindEvents = (elm) => {
  elm.addEventListener('focus', showLabel(elm), true)
  elm.addEventListener('blur', hideLabel(elm), true)
}

module.exports = ({
  value = '',
  type = 'text',
  onChange = noop,
  label = '',
  required = false,
  disabled = false,
  dense = false,
  validation = [],
  className = ''
}) => {
  const textfieldClass = `
    mdc-textfield
    ${validation && validation.length ? 'mdc-textfield--invalid' : ''}
    ${className}
  `
  const labelClass = `
    mdc-textfield__label
    ${value.length ? 'mdc-textfield__label--float-above' : ''}
  `

  return [
    html`
      <div
        class=${textfieldClass}
        onload=${bindEvents}
      >
        <input
          class="mdc-textfield__input"
          type=${type}
          value=${value}
          onchange=${onChange}
        />
        <label
          class=${labelClass}
        >
          ${label}
        </label>
      </div>
    `,
    html`
      ${Validation({
        messages: validation
      })}
    `
  ]
}
