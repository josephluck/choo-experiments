const html = require('choo/html')

const Button = require('./Button')
const Counter = require('../components/Counter').component
const Ripple = require('../components/Ripple').component
const SnackBar = require('./SnackBar')
const TextField = require('./TextField')

const Buttons = (state, prev, send) => {
  return html`
    <div class="mb5">
      <h2>Button</h2>
      <div class="mb5">
        ${Button({
          label: 'No Ripple'
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

const Ripples = (state, prev, send) => {
  const ripple = Ripple(state, prev, send)
  return html`
    <div class="mb5">
      <h2>Ripple</h2>
      ${ripple('rip', {
        props: {
          child: Button({
            label: 'Button with Ripple'
          })
        }
      })}
      ${ripple('rip2', {
        props: {
          child: Button({
            label: 'Button with Ripple 2'
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
        label: 'Favourite Snack',
        onChange (message) {
          send('material:updateSnackMessage', {
            message: message
          })
        }
      })}
      <br />
      <br />
      ${Button({
        label: 'Show Snack',
        ripple: true,
        onClick () {
          send('material:showSnack', {
            message: state.material.snackMessage
          })
        }
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
        label: 'Name',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldOne',
            value: value
          })
        }
      })}
      ${TextField({
        value: state.material.textFieldTwo,
        label: 'Surname',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldTwo',
            value: value
          })
        }
      })}
      ${TextField({
        value: '',
        label: 'Disabled',
        disabled: true
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
        ]
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
        }
      })}
      ${TextField({
        value: state.material.textFieldFive,
        label: 'Name',
        onChange (value) {
          send('material:updateTextField', {
            name: 'textFieldFive',
            value: value
          })
        }
      })}
    </div>
  `
}

module.exports = () => (state, prev, send) => {
  return html`
    <div class="pa5">
      <h1>Material components</h1>

      <br />

      ${Buttons(state, prev, send)}
      ${Counters(state, prev, send)}
      ${Ripples(state, prev, send)}
      ${SnackBars(state, prev, send)}
      ${TextFields(state, prev, send)}
    </div>
  `
}
