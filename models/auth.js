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
    check: async (state, { onError }, send, done) => {
      if (state.accessToken) {
        const user = { userId: jwtDecode(state.accessToken).sub }
        const fetchUser = state.$root.user.user.id ? Promise.resolve() : send('user:fetch', user)
        await Promise.all([ fetchUser ])
        return
      }
      if (onError) {
        onError('No access token in state')
      }
    }
  }
})
