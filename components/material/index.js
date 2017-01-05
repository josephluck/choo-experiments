const html = require('choo/html')

const TextField = require('./TextField')

module.exports = () => (state, prev, send) => {
  return html`
    <div class="pa5">
      <h1>Material components</h1>

      <br />
      <br />
      <br />
      <br />

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
    </div>
  `
}
