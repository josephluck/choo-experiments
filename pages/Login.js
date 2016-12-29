const html = require('choo/html')
const css = require('sheetify')
const noop = () => {}

const LoginForm = require('../components/LoginForm')

const styles = css`
  :host > .form {
    text-align: center;
  }
  :host input {
    padding: 5px 10px;
  }
`

module.exports = (child = noop) => (state, prev, send) => {
  const cb = () => send('location:set', 'dashboard')
  const onSubmit = (form) => send('login:submit', { form, cb })
  const onChange = (form) => send('login:updateForm', { form })

  return html`
    <div class=${styles}>
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
