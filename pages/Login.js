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
  const onSubmit = (e) => {
    e.preventDefault()
    send('login:submit', {
      form: state.login.form,
      cb: () => {
        send('location:set', 'dashboard')
      }
    })
  }

  const onChange = (form) => {
    send('login:updateForm', { form })
  }

  return html`
    <div class=${styles}>
      <a href="dashboard">Dashboard</a>

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
