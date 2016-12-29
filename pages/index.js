const requireAuth = require('./RequireAuth')
const redirectIfAuthenticated = require('./RedirectIfAuthenticated')
const todos = require('./Todos')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  ['/login', redirectIfAuthenticated(login())],
  ['/todos', requireAuth(todos()), [
    ['/test', requireAuth(todos(login()))]
  ]],
  ['/dashboard', requireAuth(dashboard())]
])
