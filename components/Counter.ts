import html from 'choo/html'
import * as chooComponent from 'choo-component'

const counter = () => {
  return {
    className: 'dib ba pa3 mb3',

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

    view ({
      name,
      count,
      title,
      updateTitle,
      increment
    }) {
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

const counterComponent = chooComponent(counter())
export const component = counterComponent.component
export const model = counterComponent.model

export default counterComponent
