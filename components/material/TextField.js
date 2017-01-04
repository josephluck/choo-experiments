const html = require('choo/html')
const noop = () => {}

const showLabel = (elm) => () => {
  const label = elm.querySelector('label')
  elm.classList.add('mdc-textfield--focussed')
  label.classList.add('mdc-textfield__label--float-above')
}

const hideLabel = (elm) => () => {
  const label = elm.querySelector('label')
  const input = elm.querySelector('input')
  elm.classList.remove('mdc-textfield--focussed')
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
  dense = false
}) => {
  const labelClass = `mdc-textfield__label ${value.length ? 'mdc-textfield__label--float-above' : null}`

  return html`
    <div
      class="mdc-textfield"
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
  `
}
