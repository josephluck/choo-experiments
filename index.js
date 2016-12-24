const choo = require('choo')
const html = require('choo/html')
const App = choo()

App.model({
  state: {
    todos: [
      {title: 'Hello'}
    ],
    addNewTodoValue: ''
  },

  reducers: {
    addTodo (state) {
      const todo = { complete: false, title: state.addNewTodoValue }
      const todos = [ todo, ...state.todos, ]

      return { ...state, todos, addNewTodoValue: '' }
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

const TodosList = ({ todos }) => {
  return html`
    <div>${todos.map(todo => Todo({ todo }))}</div>
  `
}

const Todo = ({ todo }) => {
  return html`
    <div>${todo.title}</div>
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
  const onChange = (value) => send ('setNewTodoValue', { value })
  const onSubmit = () => send('addTodo', { title: state.addNewTodoValue })

  return html`
    <div>
      ${TitleBar({ title: 'Choodo' })}
      ${AddNewTodoForm({ value: state.addNewTodoValue, onChange, onSubmit })}
      ${TodosList({ todos: state.todos })}
    </div>
  `
}

App.router([
  ['/', TodosApp]
])

document.body.appendChild(App.start())
