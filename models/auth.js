const jwtDecode = require('jwt-decode')
const sync = require('./middleware/sync')

module.exports = () => {
  const storedTokens = window.localStorage.getItem('tokens')
  const tokens = storedTokens ? JSON.parse(storedTokens) : {}
  const state = {
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
    expiresIn: tokens.expiresIn
  }

  return {
    namespace: 'auth',

    state,

    reducers: {
      receiveTokens: sync('tokens', (state, { accessToken, refreshToken, expiresIn }) => {
        return {
          ...state,
          accessToken,
          refreshToken,
          expiresIn
        }
      })
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
  }
}
