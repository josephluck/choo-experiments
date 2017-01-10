module.exports = () => ({
  namespace: 'map',

  state: {
    title: 'Hello, world',
    coords: [39.9526, -75.1652]
  },

  reducers: {
    setCoords: (state, data) => {
      return { coords: data }
    },
    updateTitle: (state, data) => {
      return { title: data }
    }
  }
})
