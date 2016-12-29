const jwtDecode = require('jwt-decode')

module.exports = () => ({
  namespace: 'auth',

  state: {
    accessToken: null,
    refreshToken: null,
    expiresIn: null
  },

  reducers: {
    receiveTokens (state, { accessToken, refreshToken, expiresIn }) {
      return {
        ...state,
        accessToken,
        refreshToken,
        expiresIn
      }
    }
  },

  effects: {
    initialise: async (state, payload, send, done) => {
      const user = { userId: jwtDecode(state.accessToken).sub }
      await send('user:fetch', user)
    }
  }
})
