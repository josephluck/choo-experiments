import passport from '../transport/passport'

export default () => ({
  namespace: 'user',

  state: {
    user: {}
  },

  reducers: {
    receiveUser (state, { user }) {
      return { ...state, user }
    }
  },

  effects: {
    fetch: async (state, payload, send, done) => {
      const user = await passport.fetchUser({ userId: payload.userId })
      await send('user:receiveUser', { user })
    }
  }
})
