const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    // Global state behaviour for a component
    // possibly remove instances so it's easier to
    // consume / update state for these components?

    // It looks like reducers are a little difficult to manage...
    // might wanna wrap the reducers in choo-component so that they
    // receive and return just their own instance state, that way
    // 'id' and 'instances' are not exposed here and the end user
    // does not need to be concerned about them

    // State is the default state for an instance of this component
    model: {
      namespace: 'counter',
      state: {
        count: 5,
        title: 'Default title'
      },
      reducers: {
        increment (state, id) {
          return {
            instances: {
              ...state.instances,
              [id]: {
                ...state.instances[id],
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
                ...state.instances[id],
                title
              }
            }
          }
        }
      }
    },

    // Behaviour to link view methods to reducers
    // See above for comments on how to simplify reducers so that
    // they do not need to know about id and instances
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
    // could possibly make these three separate arguments, i.e. state, methods, props?
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
