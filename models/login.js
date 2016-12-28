const validate = require('validate.js')
const loginFactory = require('../factories/login')
const passport = require('../transport/passport')

const formRules = () => {
  return {
    username: { presence: true },
    password: { presence: true }
  }
}

module.exports = () => ({
  namespace: 'login',

  state: {
    form: loginFactory.empty(),
    submitting: false,
    submitted: false,
    validation: {}
  },

  reducers: {
    updateKey (state, { key, value }) {
      const newForm = { ...state.form }
      newForm[key] = value
      return { ...state, form: newForm }
    },
    validateForm (state) {
      const validation = validate(state.form, formRules()) || {}
      return { ...state, validation }
    },
    setSubmitting (state, { submitting }) {
      return { ...state, submitting }
    },
    setSubmitted (state, { submitted }) {
      return { ...state, submitted }
    }
  },

  effects: {
    updateForm (state, payload, send, done) {
      send('login:updateKey', payload, done)
      send('login:validateForm', done)
    },

    submit (state, payload, send, done) {
      send('login:validateForm', done)
      send('login:setSubmitted', { submitted: true }, done)
      send('login:setSubmitting', { submitting: true }, done)

      passport.login({ payload }).then(response => {
        const tokens = {
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          expiresIn: response.expires_in
        }
        send('auth:receiveTokens', tokens, done)
        send('login:setSubmitting', { submitting: false }, done)
      }).catch(() => {
        send('login:setSubmitting', { submitting: false }, done)
      })
    }
  }
})
