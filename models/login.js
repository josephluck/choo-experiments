const validate = require('validate.js')
const formRules = require('../factories/login').rules

module.exports = ({
  passport = require('../transport/passport'),
  loginFactory = require('../factories/login')
}) => ({
  namespace: 'login',

  state: {
    form: loginFactory.empty(),
    valid: false,
    submitting: false,
    submitted: false,
    validation: {}
  },

  reducers: {
    updateKey: function (state, { key, value }) {
      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        }
      }
    },

    validateForm: function (state) {
      const validation = validate(state.form, formRules()) || {}
      return {
        ...state,
        validation,
        valid: !Object.keys(validation).length
      }
    },

    setSubmitting: function (state, { submitting }) {
      return {
        ...state,
        submitting
      }
    },

    setSubmitted: function (state, { submitted }) {
      return {
        ...state,
        submitted
      }
    }
  },

  effects: {
    updateForm: async function (state, payload, send, done) {
      await send('login:updateKey', payload)
      await send('login:validateForm')
    },

    submit: async function (state, { payload, cb }, send, done) {
      await send('login:setSubmitted', { submitted: true })
      await send('login:validateForm')

      if (!state.valid) { return false }

      await send('login:setSubmitting', { submitting: true })

      const response = await passport.login({ payload })

      await send('login:setSubmitting', { submitting: false })

      if (response.code === 403) { return false }

      await send('auth:receiveTokens', {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        expiresIn: response.expires_in
      })

      return cb()
    }
  }
})
