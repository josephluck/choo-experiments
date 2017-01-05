module.exports = ({
  passport = require('../transport/passport')
}) => ({
  namespace: 'material',

  state: {
    textFieldOne: '',
    textFieldTwo: ''
  },

  reducers: {
    updateTextField (state, { name, value }) {
      return {
        [name]: value
      }
    }
  }
})
