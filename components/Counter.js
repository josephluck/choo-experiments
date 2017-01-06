const html = require('choo/html')

const element = ({
  count = 0,
  thingVisible = false,
  onload = () => {},
  onunload = () => {},
  onincr = () => {},
  onmouseenter = () => { console.log('the mouse entered!') },
  onmouseout = () => { console.log('the mouse left!') }
}) => {
  return html`
  <div onunload=${onunload} onload=${onload}>
    <button onclick=${onincr}>Increment</button>
    <span onmouseenter=${onmouseenter} onmouseout=${onmouseout}>${count}</span>

    ${thingVisible ? html`<span>This is toggled</span>` : ''}
  </div>
  `
}

const component = (state, prev, send) => (id, initialState = {}) => {
  const currentCounter = state.counter[id] ? state.counter[id] : emptyCounter()

  return element({
    count: currentCounter.value,
    thingVisible: currentCounter.hovered,
    onload () {
      send('counter:init', { id, initialState })
    },
    onunload () {
      send('counter:clear', id)
    },
    onincr () {
      send('counter:increment', id)
    },
    onmouseenter () {
      send('counter:setProp', {id, key: 'hovered', value: true})
    },
    onmouseout () {
      send('counter:setProp', {id, key: 'hovered', value: false})
    }
  })
}

const emptyCounter = () => ({
  value: 0,
  hovered: false
})

const updateComponentWithId = (id, value) => {
  return { [id]: value }
}

const model = () => ({
  namespace: 'counter',
  state: {
    abc: {
      value: 123
    }
  },
  reducers: {
    init (state, { id, initialState }) {
      return updateComponentWithId(id, {
        ...emptyCounter(),
        ...initialState
      })
    },
    set (state, { id, value }) {
      return updateComponentWithId(id, {
        ...state[id],
        value
      })
    },
    increment (state, id) {
      const prev = state[id].value
      return updateComponentWithId(id, {
        ...state[id],
        value: prev + 1
      })
    },
    clear (state, id) {
      return updateComponentWithId(id, emptyCounter())
    },
    setProp (state, { id, key, value }) {
      return updateComponentWithId(id, {
        ...state[id],
        [key]: value
      })
    }
  }
})

module.exports = { element, component, model }
