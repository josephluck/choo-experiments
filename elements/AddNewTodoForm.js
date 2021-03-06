const html = require('choo/html')

module.exports = ({ value, onChange, onSubmit }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  const onInputChange = (e) => onChange(e.target.value)

  return html`
    <form onsubmit=${onFormSubmit}>
      <input
        value=${value}
        onchange=${onInputChange}
        type="text"
        placeholder="Add a todo"
      />
    </form>
  `
}
