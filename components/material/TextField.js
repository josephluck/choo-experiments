const html = require('choo/html')
const noop = () => {}
const Validation = require('./Validation')

const onInputFocus = (elm) => () => {
  window.requestAnimationFrame(() => {
    elm.classList.add('is-focused')
  })
}

const onInputBlur = (elm) => () => {
  window.requestAnimationFrame(() => {
    elm.classList.remove('is-focused')
    const input = elm.querySelector('input')
    if (!input.value.length) {
      elm.classList.remove('is-dirty')
    }
  })
}

const bindEvents = (elm) => {
  elm.addEventListener('focus', onInputFocus(elm), true)
  elm.addEventListener('blur', onInputBlur(elm), true)
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
  return html`
    <div
      class=${`
        mdl-textfield mdl-textfield--floating-label
        ${value.length ? 'is-dirty' : ''}
        ${validation && validation.length ? 'is-invalid' : ''}
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
      ${Validation({
        messages: validation
      })}
    </div>
  `
}
