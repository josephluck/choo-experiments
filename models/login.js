const _ = require('lodash')
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
    replaceForm: (state, { form }) => {
      return { ...state, form: { ...state.form, ...form } }
    },

    validateForm: (state) => {
      const validation = validate(state.form, formRules()) || {}
      return {
        ...state,
        validation,
        valid: !Object.keys(validation).length
      }
    },

    setSubmitting: (state, { submitting }) => {
      return {
        ...state,
        submitting
      }
    },

    setSubmitted: (state, { submitted }) => {
      return {
        ...state,
        submitted
      }
    }
  },

  effects: {
    updateForm: _.debounce((state, { form }, send, done) => {
      send('login:replaceForm', { form })
      send('login:validateForm')
    }, 50),

    submit: async function (state, { form, cb }, send, done) {
      await send('login:setSubmitted', { submitted: true })
      await send('login:validateForm')

      if (!state.valid) { return false }

      await send('login:setSubmitting', { submitting: true })

      const response = await passport.login({ payload: form })

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
