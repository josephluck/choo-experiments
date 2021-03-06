const html = require('choo/html')
const component = require('choo-component')
const noop = () => {}

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

const ripple = () => {
  return {
    className: 'dib',
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
          return {
            ripples: state.ripples.map((ripple) => {
              if (ripple.uuid === uuid) {
                ripple.showing = false
              }
              return ripple
            })
          }
        },
        remove (state) {
          return state.ripples.some((ripple) => ripple.showing) ? state : { ripples: [] }
        }
      },
      effects: {
        rip (state, { position }, send, done) {
          const uuid = Math.random()
          const payload = Object.assign({}, position, { uuid, showing: true })
          send('ripple:add', payload)
          window.setTimeout(() => {
            send('ripple:hide', { uuid })
            send('ripple:remove')
          }, 750)
        }
      }
    },

    view ({
      ripples = [],
      child = '',
      rip = noop
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
          class=${`
            ${prefix}
          `}
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
