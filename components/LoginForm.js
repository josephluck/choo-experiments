const html = require('choo/html')
const noop = () => {}
const emptyLogin = require('../factories/login').empty

const MdlTextfield = ({
  value = '',
  type = 'text',
  onChange = noop,
  label = ''
}) => {
  return html`
    <div class="mdc-textfield">
      <input
        class="mdc-textfield__input"
        type=${type}
        value=${value}
        onkeyup=${onChange}
      />
      <label class="mdc-textfield__label ${value.length ? 'mdc-textfield__label--float-above' : null}">
        ${label}
      </label>
    </div>
  `
}

module.exports = ({
  onSubmit = noop,
  values = emptyLogin(),
  onChange = noop,
  submitted = false,
  submitting = false,
  valid = false,
  validation = {},
  styles = ''
}) => {
  const onUsernameChange = (e) => {
    onChange({
      ...values,
      username: e.target.value
    })
  }
  const onPasswordChange = (e) => onChange({
    ...values,
    password: e.target.value
  })
  const submit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }

  return html`
    <form
      onsubmit=${submit}
      class=${styles}
    >
      ${MdlTextfield({
        value: values.username,
        onChange: onUsernameChange,
        label: 'Username'
      })}
      ${submitted && validation.username
        ? html`
          <small>
            Username is required
          </small>
        `
        : null
      }

      <div class="mdc-form-field mb4">
        <div class="mdc-textfield">
          <input
            class="mdc-textfield__input"
            type="password"
            value=${values.password}
            onkeyup=${onPasswordChange}
          />
          <label class="mdc-textfield__label ${values.password.length ? 'mdc-textfield__label--float-above' : null}">
            Password
          </label>
        </div>
        ${submitted && validation.password
          ? html`
            <small>
              Password is required
            </small>
          `
          : null
        }
      </div>

      <button
        type="submit"
        disabled=${(submitted && !valid) || submitting}
        class="mdc-button mdc-button--raised mdc-button--primary"
      >
        Login
      </button>
    </form>
  `
}
