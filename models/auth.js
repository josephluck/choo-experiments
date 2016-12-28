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
  }
})
