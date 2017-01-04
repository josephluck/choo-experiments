const html = require('choo/html')
const noop = () => {}
const emptyLogin = require('../factories/login').empty
const TextField = require('./material/TextField')

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
      ${TextField({
        value: values.username,
        onChange: onUsernameChange,
        label: 'Username',
        validation: submitted ? validation.username : null
      })}

      <br />
      <br />

      ${TextField({
        value: values.password,
        onChange: onPasswordChange,
        label: 'Password',
        type: 'password',
        validation: submitted ? validation.password : null
      })}

      <br />
      <br />

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
