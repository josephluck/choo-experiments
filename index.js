const choo = require('choo')
const html = require('choo/html')
const App = choo()
const store = require('./store')

App.model({
  state: {
    todos: [],
    addNewTodoValue: '',
    loading: false
  },

  reducers: {
    receiveTodos (state, { todos }) {
      return { ...state, todos }
    },

    receiveTodo (state, { todo }) {
      const todos = [ ...state.todos, todo ]
      return { ...state, todos, addNewTodoValue: '' }
    },

    receiveTodoUpdate (state, { todo }) {
      const todos = state.todos.slice()
      const todoIndex = state.todos.findIndex(t => t.uuid === todo.uuid)
      todos[todoIndex] = todo
      return { ...state, todos }
    },

    setNewTodoValue (state, { value }) {
      return { ...state, addNewTodoValue: value }
    },

    setLoading (state, { loading }) {
      return { ...state, loading }
    }
  },

  effects: {
    requestTodos (state, payload, send, done) {
      send('setLoading', { loading: true }, done)
      store.getAll('todos', todos => {
        send('setLoading', { loading: false }, done)
        send('receiveTodos', { todos }, done)
      })
    },

    addTodo (state, payload, send, done) {
      send('setLoading', { loading: true }, done)
      const todo = { complete: false, title: state.addNewTodoValue, uuid: Math.random() }
      store.add('todos', todo, () => {
        send('setLoading', { loading: false }, done)
        send('receiveTodo', { todo }, done)
      })
    },

    updateTodo (state, payload, send, done) {
      send('receiveTodoUpdate', { todo: payload.todo }, done)
      const todoIndex = state.todos.findIndex(t => t.uuid === payload.todo.uuid)
      store.replace('todos', todoIndex, payload.todo, () => {
        done()
      })
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
          onToggle: () => onToggle(todo)
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
  const requestTodos = () => send('requestTodos')
  const onChange = value => send('setNewTodoValue', { value })
  const onSubmit = () => send('addTodo', { title: state.addNewTodoValue })
  const onToggle = todo => send('updateTodo', {
    todo: { ...todo, complete: !todo.complete }
  })

  return html`
    <div onload=${requestTodos}>
      ${TitleBar({ title: 'Choodo' })}
      ${AddNewTodoForm({ value: state.addNewTodoValue, onChange, onSubmit })}
      ${TodosList({ todos: state.todos, onToggle })}

      ${state.loading === true ? 'Loading' : null}
    </div>
  `
}

App.router([
  ['/', TodosApp]
])

document.body.appendChild(App.start())
