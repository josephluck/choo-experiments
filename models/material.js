module.exports = ({
  passport = require('../transport/passport')
}) => ({
  namespace: 'material',

  state: {
    textFieldOne: '',
    textFieldTwo: '',
    textFieldThree: '',
    textFieldFour: '',
    textFieldFive: 'Predefined value',
    snackMessage: 'Snickers!',
    snackShowing: false
  },

  reducers: {
    updateTextField (state, { name, value }) {
      return { [name]: value }
    },
    updateSnackMessage (state, { message }) {
      return { snackMessage: message }
    },
    snackShow (state) {
      return { snackShowing: true }
    },
    snackHide (state) {
      return { snackShowing: false }
    }
  },

  effects: {
    showSnack (state, payload, send, done) {
      send('material:snackShow', {
        message: payload.message
      }, done)

      window.setTimeout(() => {
        send('material:snackHide', done)
      }, 1000)
    }
  }
})
