const html = require('choo/html')
const component = require('./chooComponent')

const counter = () => {
  return {
    model () {
      return {
        namespace: 'counter',
        state: {},
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
      }
    },

    behaviour (send, id) {
      return {
        increment: () => {
          send('counter:increment', id)
        }
      }
    },

    view ({
      count = 0,
      increment = () => {}
    } = {}) {
      return html`
        <button onclick=${increment}>Increment ${count}</button>
      `
    },

    defaultState () {
      return {
        count: 0
      }
    }
  }
}

module.exports = component(counter)
