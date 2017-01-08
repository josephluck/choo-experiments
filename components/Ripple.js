const html = require('choo/html')
const css = require('sheetify')
const component = require('./chooComponent')

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

// Unfortunately, effects still need to know about id :'(
const ripple = () => {
  return {
    model: {
      namespace: 'ripple',
      state: {
        ripples: []
      },
      reducers: {
        add (state, { x, y, uuid, showing }) {
          return {
            ripples: [ ...state.ripples, { x, y, uuid, showing } ]
          }
        },
        hide (state, { uuid }) {
          const ripples = state.ripples.slice()
          const indexToRemove = ripples.findIndex(ripple => ripple.uuid === uuid)
          ripples[indexToRemove].showing = false
          return { ripples }
        },
        remove (state) {
          return state.ripples.some(ripple => ripple.showing) ? state : { ripples: [] }
        }
      },
      effects: {
        rip (state, { id, position }, send, done) {
          const uuid = Math.random()
          const payload = Object.assign({}, position, { id, uuid, showing: true })
          send('ripple:add', payload)
          window.setTimeout(() => {
            send('ripple:hide', { id, uuid })
            send('ripple:remove', { id })
          }, 750)
        }
      }
    },

    view ({
      ripples = [],
      child = '',
      rip = () => {}
    }) {
      const onmousedown = (e) => {
        rip({
          position: {
            y: e.pageY - e.target.parentNode.offsetTop,
            x: e.pageX - e.target.parentNode.offsetLeft
          }
        })
      }
      return html`
        <div
          class=${prefix}
          onmousedown=${onmousedown}
        >
          ${ripples.map((ripple) => {
            return html`
              <svg
                height="20"
                width="20"
                class="ripple"
                style="top: ${ripple.y || 0}px; left: ${ripple.x || 0}px"
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
  }
}

module.exports = component(ripple())
