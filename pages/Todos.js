const html = require('choo/html')
const TitleBar = require('../components/TitleBar')
const TodosList = require('../components/TodosList')
const AddNewTodoForm = require('../components/AddNewTodoForm')

module.exports = (state, prev, send) => {
  const requestTodos = () => send('requestTodos')
  const onChange = (value) => send('setNewTodoValue', { value })
  const onSubmit = () => send('addTodo', { title: state.addNewTodoValue })
  const onToggle = (todo) => send('updateTodo', {
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
