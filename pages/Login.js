const html = require('choo/html')
const css = require('sheetify')
const noop = () => {}

const styles = css`
  :host > .form {
    text-align: center;
  }
  :host input {
    padding: 5px 10px;
  }
`

module.exports = (child = noop) => (state, prev, send) => {
  const onSubmit = (e) => {
    e.preventDefault()
    send('login:submit', {
      payload: state.login.form,
      cb: () => {
        send('location:set', 'dashboard')
      }
    })
  }

  const onAttrChange = (key) => (e) => send('login:updateForm', { key, value: e.target.value })
  const onUsernameChange = onAttrChange('username')
  const onPasswordChange = onAttrChange('password')

  return html`
    <div class=${styles}>
      <a href="dashboard">Dashboard</a>
      <form
        onsubmit=${onSubmit}
        class="form"
      >
        <div class="mt3">
          <label>
            Username
          </label>
          <input
            type="text"
            value=${state.login.form.username}
            onchange=${onUsernameChange}
          />
          ${state.login.submitted && state.login.validation.username
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
            value=${state.login.form.password}
            onchange=${onPasswordChange}
          />
          ${state.login.submitted && state.login.validation.password
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
          disabled=${state.login.submitted && !state.login.valid}
        >
          Login
        </button>
      </form>

      <div>
        ${state.login.submitting ? 'Submitting' : null}
      </div>
      ${child(state, prev, send)}
    </div>
  `
}
