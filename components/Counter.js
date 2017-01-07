const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    // Global state behaviour for a component
    // State is the default state for an instance of this component
    //
    // possibly remove instances so it's easier to
    // consume / update state for these components?
    // or...
    // might wanna wrap the reducers in choo-component so that they
    // receive and return just their own instance state, that way
    // 'id' and 'instances' are not exposed here and the end user
    // does not need to be concerned about them
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
    //
    // We could also skip this behaviour step entirely by assuming
    // that the name of the function is the same as the name of
    // the reducer since behaviour only links view methods to
    // reducers
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

    // Template / element - receives methods, props and state
    // in one object in its first argument
    // methods correspond to component reducers
    // props correspond to outside props
    // state correspond to the current instance's internal state
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
