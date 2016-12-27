const test = require('tape')
const todos = require('./todos')({})

test('MODELS / todos / receive todos', function (t) {
  t.plan(3)

  const state = {
    todos: [],
    addNewTodoValue: 'hey'
  }
  const payload = { todos: [ 'todo' ] }

  const newState = todos.reducers.receiveTodos(state, payload)

  t.equal(newState.todos.length, 1, 'Should receive todos')
  t.equal(newState.todos[0], 'todo', 'Should receive the correct todos')
  t.equal(newState.addNewTodoValue, 'hey', 'Should retain other state')
  t.end()
})

test('MODELS / todos / receive todo', function (t) {
  t.plan(2)

  const state = {
    todos: [ 'todo' ]
  }
  const payload = { todo: 'todo 2' }

  const newState = todos.reducers.receiveTodo(state, payload)

  t.equal(newState.todos.length, 2, 'Should add a new todo')
  t.equal(newState.todos[1], 'todo 2', 'Should add the correct todo')
  t.end()
})

test('MODELS / todos / receive todo update', function (t) {
  t.plan(2)

  const state = {
    todos: [
      { title: 'todo', uuid: 1 },
      { title: 'todo 2', uuid: 2 }
    ]
  }
  const editedTodo = { title: 'todo 2 edited', uuid: 2 }
  const payload = { todo: editedTodo }

  const newState = todos.reducers.receiveTodoUpdate(state, payload)

  t.equal(newState.todos.length, 2, 'The length of the existing todos should be unchanged')
  t.deepEqual(newState.todos[1], editedTodo, 'The second todo should be updated')
  t.end()
})
