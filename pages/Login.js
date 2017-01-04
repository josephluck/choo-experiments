const html = require('choo/html')
const noop = () => {}

const LoginForm = require('../components/LoginForm')

module.exports = (child = noop) => (state, prev, send) => {
  const cb = () => send('location:set', 'dashboard')
  const onSubmit = (form) => send('login:submit', { form, cb })
  const onChange = (form) => send('login:updateForm', { form })

  return html`
    <div class="ma5">
      ${LoginForm({
        onSubmit,
        onChange,
        values: state.login.form,
        submitted: state.login.submitted,
        submitting: state.login.submitting,
        valid: state.login.valid,
        validation: state.login.validation
      })}

      <div>
        ${state.login.submitting ? 'Submitting' : null}
      </div>

      ${child(state, prev, send)}
    </div>
  `
}
