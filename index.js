const choo = require('choo')
const html = require('choo/html')
const App = choo()

App.model({
  state: {
    todos: [],
    addNewTodoValue: ''
  },

  reducers: {
    addTodo (state) {
      const todo = { complete: false, title: state.addNewTodoValue }
      const todos = [ todo, ...state.todos, ]

      return { ...state, todos, addNewTodoValue: '' }
    },
    toggleTodoComplete (state, { index }) {
      const todos = state.todos.slice()
      todos[index].complete = !todos[index].complete

      return { ...state, todos }
    },
    setNewTodoValue (state, { value }) {
      return { ...state, addNewTodoValue: value }
    }
  }
})

const TitleBar = ({ title }) => {
  return html`
    <h1>${title}</h1>
  `
}

const TodosList = ({ todos, onToggle }) => {
  return html`
    <div>
      ${todos.map((todo, index) => {
        return Todo({
          todo,
          onToggle: () => onToggle(index)
        })
      })}
    </div>
  `
}

const Todo = ({ todo, onToggle }) => {
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

const AddNewTodoForm = ({ value, onChange, onSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault()
    onSubmit()
  }
  const onInputChange = e => onChange(e.target.value)

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

const TodosApp = (state, prev, send) => {
  const onChange = value => send('setNewTodoValue', { value })
  const onSubmit = () => send('addTodo', { title: state.addNewTodoValue })
  const onToggle = index => send('toggleTodoComplete', { index })

  return html`
    <div>
      ${TitleBar({ title: 'Choodo' })}
      ${AddNewTodoForm({ value: state.addNewTodoValue, onChange, onSubmit })}
      ${TodosList({ todos: state.todos, onToggle })}
    </div>
  `
}

App.router([
  ['/', TodosApp]
])

document.body.appendChild(App.start())
