module.exports = {
  namespace: 'login',

  state: {
    form: {
      username: '',
      password: ''
    },
    submitting: false
  },

  reducers: {
    updateForm (state, { key, value }) {
      const newForm = { ...state.form }
      newForm[key] = value
      return { ...state, form: newForm }
    },
    setSubmitting (state, { submitting }) {
      return { ...state, submitting }
    }
  },

  effects: {
    submit (state, payload, send, done) {
      console.info(state.form)
      send('login:setSubmitting', { submitting: true }, done)
      setTimeout(() => {
        send('login:setSubmitting', { submitting: false }, done)
      }, 1000)
    }
  }
}
