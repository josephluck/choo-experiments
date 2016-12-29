const requireAuth = require('./RequireAuth')
const todos = require('./Todos')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  ['/todos', requireAuth(todos()), [
    ['/test', requireAuth(todos(login()))]
  ]],
  ['/login', login()],
  ['/dashboard', requireAuth(dashboard())]
])
