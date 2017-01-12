import html from 'choo/html'
import LoginForm from '../elements/LoginForm'

export default () => (state, prev, send) => {
  const onSubmit = () => send('login:submit', {
    cb () {
      send('location:set', 'dashboard')
    }
  })
  const onChange = (form) => send('login:updateForm', { form })

  return html`
    <div class="flex flex-auto">
      ${LoginForm({
        onSubmit,
        onChange,
        values: state.login.form,
        submitted: state.login.submitted,
        submitting: state.login.submitting,
        valid: state.login.valid,
        validation: state.login.validation,
        className: ''
      })}

      <div>
        ${state.login.submitting ? 'Submitting' : null}
      </div>
    </div>
  `
}
