const html = require('choo/html')
const noop = () => {}
const emptyLogin = require('../factories/login').empty
const TextField = require('./TextField')

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
    onSubmit()
  }

  return html`
    <form
      onsubmit=${submit}
      class=${styles}
    >
      <div>
        ${TextField({
          value: values.username,
          onChange: onUsernameChange,
          label: 'Username',
          validation: submitted ? validation.username : null
        })}
      </div>

      <br />

      <div>
        ${TextField({
          value: values.password,
          onChange: onPasswordChange,
          label: 'Password',
          type: 'password',
          validation: submitted ? validation.password : null
        })}
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
