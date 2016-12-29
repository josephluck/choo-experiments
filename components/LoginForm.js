const html = require('choo/html')
const noop = () => {}
const emptyLogin = require('../factories/login').empty

module.exports = ({
  onSubmit = noop,
  values = emptyLogin(),
  onChange = noop,
  submitted = false,
  submitting = false,
  valid = false,
  validation = {}
}) => {
  const onUsernameChange = (e) => onChange({
    ...values,
    username: e.target.value
  })
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
      class="form"
    >
      <div class="mt3">
        <label>
          Username
        </label>
        <input
          type="text"
          value=${values.username}
          onchange=${onUsernameChange}
        />
        ${submitted && validation.username
          ? html`
            <small>
              Username is required
            </small>
          `
          : null
        }
      </div>

      <div>
        <label>
          Password
        </label>
        <input
          type="password"
          value=${values.password}
          onchange=${onPasswordChange}
        />
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
      >
        Login
      </button>
    </form>
  `
}
