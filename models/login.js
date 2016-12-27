const validate = require('validate.js')

const rules = () => {
  return {
    username: { presence: true },
    password: { presence: true }
  }
}

module.exports = {
  namespace: 'login',

  state: {
    form: {
      username: '',
      password: ''
    },
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
      const validation = validate(state.form, rules()) || {}
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
      const isValid = false
      if (isValid) {
        send('login:setSubmitting', { submitting: true }, done)
        setTimeout(() => {
          send('login:setSubmitting', { submitting: false }, done)
        }, 1000)
      }
    }
  }
}
