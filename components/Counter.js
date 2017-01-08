const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    // model.state is the default state for an instance of this
    // component, i.e. when a new counter is created, it will have
    // this default state, if no initialState is passed in during
    // its creation
    //
    // possibly remove instances so it's easier to
    // consume / update state for these components?
    // downside is that it could never be removed from
    // global state using onunload since choo uses xtend
    // under the hood which we cannot bypass
    // or...
    // might wanna wrap the reducer functions in choo-component
    // so that they receive and return just their own instance
    // state, that way 'id' and 'instances' are not exposed
    // here and the end user does not need to be concerned about them
    model: {
      namespace: 'counter',
      state: {
        count: 5,
        title: 'Default title'
      },
      reducers: {
        increment (state, { id }) {
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
    // reducers and reducers can only receive one payload argument
    // we'd effectively be creating this object during the
    // instantiation of the component
    behaviour (send, id) {
      return {
        increment () {
          send('counter:increment', { id })
        },
        updateTitle (title) {
          send('counter:updateTitle', { id, title })
        }
      }
    },

    // Template / element - receives methods, props and state
    // in one object in its first argument
    // methods corresponds to methods defined in behaviour which correspond to reducers
    // props corresponds to outside props passed from parent page / component
    // state corresponds to the current instance's internal state
    view ({
      name, // prop
      count = 0, // state
      title = '', // state
      updateTitle = noop, // method
      increment = noop // method
    } = {}) {
      return html`
        <div>
          <hr />
          ${name}
          <br />
          <input
            type="text"
            value=${title}
            oninput=${(e) => updateTitle(e.target.value)}
          />
          <br />
          ${title}
          <br />
          <button onclick=${increment}>Increment ${count}</button>
          <hr />
          <br />
          <br />
        </div>
      `
    }
  }
}

// This will export a component (for use in choo views) and a model which needs
// to be registered in the choo app on boot
module.exports = component(counter())
