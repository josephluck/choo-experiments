const html = require('choo/html')

module.exports = (state, prev, send) => {
  const onSubmit = (e) => {
    e.preventDefault()
    send('login:submit')
  }

  const onAttrChange = (key) => (e) => send('login:updateForm', { key, value: e.target.value })
  const onUsernameChange = onAttrChange('username')
  const onPasswordChange = onAttrChange('password')

  return html`
    <div>
      <form
        onsubmit=${onSubmit}
      >
        <label>
          Username
        </label>
        <input
          type="text"
          value=${state.login.form.username}
          onchange=${onUsernameChange}
        />

        <label>
          Password
        </label>
        <input
          type="password"
          value=${state.login.form.password}
          onchange=${onPasswordChange}
        />

        <button
          type="submit"
        >
          Login
        </button>
      </form>

      <div>
        ${state.login.submitting ? 'Submitting' : null}
      </div>
    </div>
  `
}
