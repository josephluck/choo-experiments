const html = require('choo/html')

const TextField = require('./TextField')
const SnackBar = require('./SnackBar')

module.exports = () => (state, prev, send) => {
  return html`
    <div class="pa5">
      <h1>Material components</h1>

      <br />
      <br />
      <br />
      <br />

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
        <button
          onclick=${() => {
            send('material:showSnack', {
              message: state.material.snackMessage
            })
          }}
        >
          Give me a snack!
        </button>
        ${SnackBar({
          showing: state.material.snackShowing,
          message: state.material.snackMessage
        })}
      </div>
    </div>
  `
}
