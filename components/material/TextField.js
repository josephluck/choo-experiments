const html = require('choo/html')
const noop = () => {}
const Validation = require('./Validation')

const showLabel = (elm) => () => {
  window.requestAnimationFrame(() => {
    elm.classList.add('is-focused')
  })
}

const hideLabel = (elm) => () => {
  const input = elm.querySelector('input')
  window.requestAnimationFrame(() => {
    elm.classList.remove('is-focused')
    if (!input.value.length) {
      elm.classList.remove('is-dirty')
    }
  })
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
  const inputElm = html`
    <div
      class=${`
        mdl-textfield mdl-textfield--floating-label
        ${value.length ? 'is-dirty' : ''}
        ${validation && validation.length ? 'mdl-textfield--invalid' : ''}
        ${className}
      `}
      onload=${bindEvents}
    >
      <input
        class="mdl-textfield__input"
        type=${type}
        value=${value}
        oninput=${onChange}
      />
      <label
        class=${`
          mdl-textfield__label
        `}
      >
        ${label}
      </label>
    </div>
  `
  const validationElm = html`
    ${Validation({
      messages: validation
    })}
  `
  return [
    inputElm,
    validationElm
  ]
}
