const html = require('choo/html')

module.exports = ({ todo, onToggle }) => {
  return html`
    <div>
      <input
        type="checkbox"
        checked=${todo.complete}
        onchange=${onToggle}
      />
      <span
        style="text-decoration': ${todo.complete ? 'line-through' : 'normal'}"
      >
        ${todo.title}
      </span>
    </div>
  `
}
