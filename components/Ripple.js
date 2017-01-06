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
  }
  :host .ripple.--showing {
    animation: ripple-animation .75s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
  }
  :host .ripple > .ripple-inner {
    fill: rgba(0, 0, 0, 0.2);
  }
`

const emptyRippleState = () => ({
  showing: false,
  x: 0,
  y: 0
})

const updateComponentWithId = (id, value) => {
  return { [id]: value }
}

const element = ({
  showing = false,
  position = {},
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
      onmousedown=${(e) => onmousedown(e, child)}
    >
      <svg
        height="20"
        width="20"
        class=${`
          ripple
          ${showing ? '--showing' : ''}
        `}
        style="top: ${position.y}px; left: ${position.x}px"
      >
        <circle
          class="ripple-inner"
          cx="10"
          cy="10"
          r="10"
        />
      </svg>

      ${child}
    </div>
  `
}

const component = (state, prev, send) => (id, props = {}, initialState = {}) => {
  const currentRipple = state.ripple[id] ? state.ripple[id] : emptyRippleState()
  const properties = Object.assign({}, props, {
    showing: currentRipple.showing,
    position: currentRipple.position,
    onload () {
      send('ripple:init', { id, initialState })
    },
    onunload () {
      send('ripple:clear', id)
    },
    onmousedown (e, child) {
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
  state: {
    abc: {
      showing: true
    }
  },
  reducers: {
    init (state, { id, initialState }) {
      const value = Object.assign({}, emptyRippleState(), initialState)
      return updateComponentWithId(id, value)
    },
    clear (state, id) {
      return updateComponentWithId(id, emptyRippleState())
    },
    show (state, { id, position }) {
      return updateComponentWithId(id, { showing: true, position })
    },
    hide (state, id) {
      return updateComponentWithId(id, emptyRippleState())
    }
  },
  effects: {
    trigger (state, payload, send, done) {
      if (!state[payload.id].showing) {
        send('ripple:show', payload)

        window.setTimeout(() => {
          send('ripple:hide', payload.id)
        }, 1000)
      }
    }
  }
})

module.exports = { element, component, model }
