import html from 'choo/html'
import { empty as emptyLogin } from '../factories/login'
import TextField from './TextField'

export default ({
  onSubmit,
  values,
  onChange,
  submitted,
  submitting,
  valid,
  validation,
  className
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
      class=${className}
    >
      <div>
        ${TextField({
          value: values.username,
          type: 'text',
          onChange: onUsernameChange,
          label: 'Username',
          validation: submitted ? validation.username : null,
          className: '',
          disabled: false
        })}
      </div>

      <br />

      <div>
        ${TextField({
          value: values.password,
          type: 'password',
          onChange: onPasswordChange,
          label: 'Password',
          validation: submitted ? validation.password : null,
          className: '',
          disabled: false
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
