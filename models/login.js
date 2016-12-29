const validate = require('validate.js')
const formRules = require('../factories/login').rules

module.exports = ({
  passport = require('../transport/passport'),
  loginFactory = require('../factories/login')
}) => ({
  namespace: 'login',

  state: {
    form: loginFactory.empty(),
    valid: true,
    submitting: false,
    submitted: false,
    validation: {}
  },

  reducers: {
    replaceForm: function (state, { form }) {
      console.log(form)
      return { ...state, form: { ...state.form, ...form } }
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
    updateForm: async function (state, { form }, send, done) {
      await send('login:replaceForm', { form })
      await send('login:validateForm')
    },

    submit: async function (state, { form, cb }, send, done) {
      await send('login:setSubmitted', { submitted: true })
      await send('login:validateForm')

      if (!state.valid) { return false }

      await send('login:setSubmitting', { submitting: true })

      const response = await passport.login({ form })

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
