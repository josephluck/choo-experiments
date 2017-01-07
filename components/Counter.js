const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    model: {
      namespace: 'counter',
      reducers: {
        increment (state, id) {
          console.log('Should increment')
          return {
            instances: {
              ...state.instances,
              [id]: {
                count: state.instances[id].count + 1
              }
            }
          }
        }
      }
    },

    defaultInstanceState () {
      return {
        count: 0
      }
    },

    behaviour (send, id) {
      return {
        increment () {
          send('counter:increment', id)
        }
      }
    },

    view ({
      count = 0,
      increment = noop
    } = {}) {
      return html`
        <button onclick=${increment}>Increment ${count}</button>
      `
    }
  }
}

module.exports = component(counter)
