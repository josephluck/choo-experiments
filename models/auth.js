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
    initialise (state, payload, send, done) {
      const fetchUser = new Promise((resolve) => {
        const resolveResponse = (response) => resolve(response)
        send('user:fetch', {
          userId: jwtDecode(state.accessToken).sub
        }, resolveResponse, done)
      })

      return Promise.all([fetchUser]).then((response) => {
        console.log(response)
        debugger
      })
    }
  }
})
