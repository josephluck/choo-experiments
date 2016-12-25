const test = require('tape')
const todos = require('./todos')

test('MODELS / todos / receive todos', function (t) {
  t.plan(2)

  const state = {
    todos: [],
    addNewTodoValue: ''
  }
  const payload = { todos: [ 'todo' ] }

  const newState = todos.reducers.receiveTodos(state, payload)
  t.equal(newState.todos.length, 1, 'Should add a new todo')
  t.equal(newState.todos[0], 'todo', 'Should add the correct todo')
  t.end()
})
