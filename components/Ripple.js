const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  @keyframes ripple-animation {
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
  :host {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  :host .ripple {
    position: absolute;
    margin-top: -10px;
    margin-left: -10px;
    transform-origin: center center;
    transform: scale(0);
    opacity: 1;
    pointer-events: none;
    animation: ripple-animation 750ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
  }
  :host .ripple > .ripple-inner {
    fill: rgba(0, 0, 0, 0.2);
  }
`

const updateRippleWithId = (id, value) => {
  return { [id]: value }
}

const element = ({
  ripples = [],
  child = '',
  onload = () => {},
  onunload = () => {},
  onmousedown = () => {}
}) => {
  return html`
    <div
      class=${prefix}
      onunload=${onunload}
      onload=${onload}
      onmousedown=${onmousedown}
    >
      ${ripples.map((ripple) => {
        return html`
          <svg
            height="20"
            width="20"
            class="ripple"
            style="top: ${ripple.y}px; left: ${ripple.x}px"
          >
            <circle
              class="ripple-inner"
              cx="10"
              cy="10"
              r="10"
            />
          </svg>
        `
      })}
      ${child}
    </div>
  `
}

const emptyRippleState = () => {
  return []
}

const component = (state, prev, send) => (id, props = {}, initialState = {}) => {
  const ripples = state.ripple[id] ? state.ripple[id] : emptyRippleState()
  const properties = Object.assign({}, props, {
    ripples,
    onload () {
      send('ripple:init', { id, initialState })
    },
    onunload () {
      send('ripple:clear', id)
    },
    onmousedown (e) {
      const position = {
        y: e.pageY - e.target.parentNode.offsetTop,
        x: e.pageX - e.target.parentNode.offsetLeft
      }
      send('ripple:trigger', { id, position })
    }
  })
  return element(properties)
}

const model = () => ({
  namespace: 'ripple',
  state: {},
  reducers: {
    init (state, { id, initialState }) {
      const value = emptyRippleState()
      return updateRippleWithId(id, value)
    },
    clear (state, id) {
      return updateRippleWithId(id, emptyRippleState())
    },
    show (state, { id, x, y, uuid }) {
      const ripples = [ ...state[id], { x, y, uuid } ]
      return updateRippleWithId(id, ripples)
    },
    hide (state, { id, uuid }) {
      const ripples = state[id].slice()
      const indexToRemove = ripples.findIndex(ripple => ripple.uuid === uuid)
      ripples.splice(indexToRemove, 1)
      return updateRippleWithId(id, ripples)
    }
  },
  effects: {
    trigger (state, { id, position }, send, done) {
      const uuid = Math.random()
      const payload = Object.assign({}, position, { uuid, id })
      send('ripple:show', payload)
      window.setTimeout(() => {
        send('ripple:hide', { id, uuid })
      }, 750)
    }
  }
})

module.exports = { element, component, model }
