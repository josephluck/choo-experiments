const store = require('../utils/store')

module.exports = {
  namespace: 'todos',

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
      send('todos:setLoading', { loading: true }, done)
      return store.getAll('todos').then((todos) => {
        send('todos:setLoading', { loading: false }, done)
        send('todos:receiveTodos', { todos }, done)
      })
    },

    addTodo (state, payload, send, done) {
      send('todos:setLoading', { loading: true }, done)
      const todo = { complete: false, title: state.addNewTodoValue, uuid: Math.random() }
      return store.add('todos', todo).then(() => {
        send('todos:setLoading', { loading: false }, done)
        send('todos:receiveTodo', { todo }, done)
      })
    },

    updateTodo (state, payload, send, done) {
      send('todos:receiveTodoUpdate', { todo: payload.todo }, done)
      const todoIndex = state.todos.findIndex(t => t.uuid === payload.todo.uuid)
      return store.replace('todos', todoIndex, payload.todo).then(() => done())
    }
  }
}
