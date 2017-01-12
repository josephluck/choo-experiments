import html from 'choo/html'

import Button from './Button'
import { component as Counter } from '../components/Counter'
import { component as MapComponent } from '../components/Map'
import { component as Ripple } from '../components/Ripple'
import SnackBar from './SnackBar'
import TextField from './TextField'

const Buttons = (state, prev, send) => {
  return html`
    <div class="mb5">
      <h2>Button</h2>
      <div class="mb5">
        ${Button({
          type: '',
          onClick: () => {},
          label: 'No Ripple',
          className: ''
        })}
        <br />
      </div>
    </div>
  `
}

const Counters = (state, prev, send) => {
  const counter = Counter(state, prev, send)
  return html`
    <div>
      <h2>Counters</h2>
      ${counter('first', {
        props: {
          name: 'Counter one'
        }
      })}
      ${counter('second', {
        initialState: {
          count: 10,
          title: 'Initial state defined title'
        },
        props: {
          name: 'Counter two'
        }
      })}
    </div>
  `
}

const Maps = (state, prev, send) => {
  const map = MapComponent(state, prev, send)
  return html`
    <div>
      <h2>Maps</h2>
      <div style="width: 500px">
        ${map('first', {
          initialState: {
            coords: [39.9526, -75.1652]
          }
        })}
        <br />
        ${map('second')}
      </div>
    </div>
  `
}

const Ripples = (state, prev, send) => {
  const ripple = Ripple(state, prev, send)
  return html`
    <div class="mb5">
      <h2>Ripple</h2>
      ${ripple('rip', {
        props: {
          child: Button({
            type: '',
            onClick: () => {},
            label: 'Button with Ripple',
            className: ''
          })
        }
      })}
      ${ripple('rip2', {
        props: {
          child: Button({
            type: '',
            onClick: () => {},
            label: 'Button with Ripple Two',
            className: ''
          })
        }
      })}
    </div>
  `
}

const SnackBars = (state, prev, send) => {
  return html`
    <div class="mb5">
      <h2>SnackBar</h2>
      ${TextField({
        value: state.material.snackMessage,
        type: 'text',
        onChange (message) {
          send('material:updateSnackMessage', {
            message: message
          })
        },
        label: 'Favourite Snack',
        validation: [],
        className: '',
        disabled: false
      })}
      <br />
      <br />
      ${Button({
        type: '',
        onClick () {
          send('material:showSnack', {
            message: state.material.snackMessage
          })
        },
        label: 'Show Snack',
        className: ''
      })}
      ${SnackBar({
        showing: state.material.snackShowing,
        message: state.material.snackMessage
      })}
    </div>
  `
}

const TextFields = (state, prev, send) => {
  return html`
    <div class="mb5">
      <h2>TextField</h2>
      ${TextField({
        value: state.material.textFieldOne,
        type: '',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldOne',
            value: value
          })
        },
        label: 'Name',
        validation: [],
        className: '',
        disabled: false
      })}
      ${TextField({
        value: state.material.textFieldTwo,
        label: 'Surname',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldTwo',
            value: value
          })
        },
        type: '',
        validation: [],
        className: '',
        disabled: false
      })}
      ${TextField({
        value: '',
        label: 'Disabled',
        disabled: true,
        onChange: () => {},
        type: '',
        validation: [],
        className: ''
      })}
      ${TextField({
        value: state.material.textFieldThree,
        label: 'With validaton',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldThree',
            value: value
          })
        },
        validation: state.material.textFieldThree.length >= 3 ? [] : [
          'Must be at least 3 characters'
        ],
        type: '',
        className: '',
        disabled: false
      })}
      ${TextField({
        value: state.material.textFieldFour,
        label: 'With additional class',
        className: 'w-50 ba br2 b--light-gray',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldFour',
            value: value
          })
        },
        type: '',
        validation: [],
        disabled: false
      })}
      ${TextField({
        value: state.material.textFieldFive,
        label: 'Name',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldFive',
            value: value
          })
        },
        type: '',
        validation: [],
        className: '',
        disabled: false
      })}
    </div>
  `
}

export default () => (state, prev, send) => {
  return html`
    <div class="pa5">
      <h1>Material components</h1>

      <br />

      ${Buttons(state, prev, send)}
      ${Counters(state, prev, send)}
      ${Maps(state, prev, send)}
      ${Ripples(state, prev, send)}
      ${SnackBars(state, prev, send)}
      ${TextFields(state, prev, send)}
    </div>
  `
}
