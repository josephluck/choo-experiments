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
    check: async (state, { onError = () => {} }, send, done) => {
      if (state.accessToken) {
        const userExists = !!state.$root.user.user.id
        const fetchUser = !userExists
          ? send('user:fetch', {
            userId: jwtDecode(state.accessToken).sub
          })
          : Promise.resolve()

        await Promise.all([ fetchUser ])

        return
      }
      onError('No access token in state')
    }
  }
})
