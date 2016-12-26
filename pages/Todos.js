const html = require('choo/html')
const TitleBar = require('../components/TitleBar')
const TodosList = require('../components/TodosList')
const AddNewTodoForm = require('../components/AddNewTodoForm')

module.exports = (state, prev, send) => {
  const requestTodos = () => send('todos:requestTodos')
  const onChange = (value) => send('todos:setNewTodoValue', { value })
  const onSubmit = () => send('todos:addTodo', { title: state.todos.addNewTodoValue })
  const onToggle = (todo) => send('todos:updateTodo', {
    todo: { ...todo, complete: !todo.complete }
  })

  return html`
    <div onload=${requestTodos}>
      ${TitleBar({ title: 'Choodo' })}
      ${AddNewTodoForm({ value: state.todos.addNewTodoValue, onChange, onSubmit })}
      ${TodosList({ todos: state.todos.todos, onToggle })}

      ${state.todos.loading === true ? 'Loading' : null}
    </div>
  `
}
