const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    // Global state behaviour for a component
    model: {
      namespace: 'counter',
      reducers: {
        increment (state, id) {
          return {
            instances: {
              ...state.instances,
              [id]: {
                count: state.instances[id].count + 1
              }
            }
          }
        },
        updateTitle (state, { id, title }) {
          return {
            instances: {
              ...state.instances,
              [id]: {
                title
              }
            }
          }
        }
      }
    },

    // Instance default state
    defaultState: {
      count: 5,
      title: 'Default title'
    },

    // Behaviour to link view methods to reducers
    behaviour (send, id) {
      return {
        increment () {
          send('counter:increment', id)
        },
        updateTitle (title) {
          send('counter:updateTitle', { id, title })
        }
      }
    },

    // Template / element - receives behaviour, props and state in it's first argument
    view ({
      name,
      count = 0,
      title = '',
      updateTitle = noop,
      increment = noop
    } = {}) {
      return html`
        <div>
          ${name}
          <input type="text" value=${title} oninput=${(e) => updateTitle(e.target.value)} /> ${title}
          <button onclick=${increment}>Increment ${count}</button>
        </div>
      `
    }
  }
}

module.exports = component(counter())
