const html = require('choo/html')
const component = require('choo-component')
const counter = () => {
  return {
    className: 'dib ba pa3 mb3',

    // model.state is the default state for an instance of this
    // component, i.e. when a new counter is created, it will have
    // this default state, if no initialState is passed
    model: {
      namespace: 'counter',
      state: {
        count: 5,
        title: 'Default title',
        foo: {
          bar: 'hello'
        }
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
    // methods corresponds reducers (by name) they MUST be given a object payload
    // props corresponds to outside props passed from parent page / component
    // state corresponds to the current instance's internal state
    view ({
      name,
      count,
      title,
      updateTitle,
      increment
    } = {}) {
      return html`
        <div>
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
        </div>
      `
    }
  }
}

module.exports = component(counter())
