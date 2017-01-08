const html = require('choo/html')
const component = require('./chooComponent')
const noop = () => {}

const counter = () => {
  return {
    // model.state is the default state for an instance of this
    // component, i.e. when a new counter is created, it will have
    // this default state, if no initialState is passed
    model: {
      namespace: 'counter',
      state: {
        count: 5,
        title: 'Default title'
      },
      reducers: {
        increment (state) {
          return {
            count: state.count + 1
          }
        },
        updateTitle (state, { title }) {
          return {
            title
          }
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
            oninput=${(e) => updateTitle({title: e.target.value})}
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
