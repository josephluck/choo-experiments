import validate from 'validate.js'
import { rules as formRules } from '../factories/login'
import passport from '../transport/passport'
import loginFactory from '../factories/login'

export default () => ({
  namespace: 'login',

  state: {
    form: loginFactory.empty(),
    valid: true,
    submitting: false,
    submitted: false,
    validation: {}
  },

  reducers: {
    replaceForm (state, { form }) {
      const newForm = { ...state.form, ...form }
      return { form: newForm }
    },

    validateForm (state, { form }) {
      const validation = validate(form, formRules()) || {}
      const valid = !Object.keys(validation).length
      return { validation, valid }
    },

    setSubmitting (state, { submitting }) {
      return { submitting }
    },

    setSubmitted (state, { submitted }) {
      return { submitted }
    }
  },

  effects: {
    updateForm (state, { form }, send, done) {
      send('login:replaceForm', { form })
      send('login:validateForm', { form })
    },

    submit (state, { cb }, send, done) {
      send('login:setSubmitted', { submitted: true })
      if (!state.valid) {
        return false
      }
      send('login:setSubmitting', { submitting: true })

      return passport.login({ payload: state.form }).then((response) => {
        send('login:setSubmitting', { submitting: false })
        if (response.code === 403) {
          return false
        }
        send('auth:receiveTokens', {
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          expiresIn: response.expires_in
        })

        return cb()
      })
    }
  }
})
