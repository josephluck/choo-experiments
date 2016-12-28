module.exports = ({
  passport = require('../transport/passport')
}) => ({
  namespace: 'user',

  state: {
    user: null
  },

  reducers: {
    receiveUser (state, { user }) {
      return { ...state, user }
    }
  },

  effects: {
    fetch (state, payload, send, done) {
      return passport.fetchUser({ userId: payload.userId }).then((user) => {
        send('user:receiveUser', { user }, done)
      })
    }
  }
})
