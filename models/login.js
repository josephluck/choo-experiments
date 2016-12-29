const validate = require('validate.js')

const formRules = () => {
  return {
    username: { presence: true },
    password: { presence: true }
  }
}

module.exports = ({
  passport = require('../transport/passport'),
  loginFactory = require('../factories/login')
}) => ({
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
    updateForm: async (state, payload, send, done) => {
      await send('login:updateKey', payload)
      await send('login:validateForm')
    },

    submit: async (state, { payload, cb }, send, done) => {
      await send('login:validateForm')
      await send('login:setSubmitted', { submitted: true })
      await send('login:setSubmitting', { submitting: true })
      const response = await passport.login({ payload })
      await send('login:setSubmitting', { submitting: false })
      if (response.code === 403) { return }
      await send('auth:receiveTokens', {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        expiresIn: response.expires_in
      })
      return cb()
    }
  }
})
