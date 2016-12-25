const html = require('choo/html')

const Todo = require('./Todo')

module.exports = ({ todos, onToggle }) => {
  return html`
    <div>
      ${todos.map((todo, index) => {
        return Todo({
          todo,
          onToggle: () => onToggle(todo)
        })
      })}
    </div>
  `
}
