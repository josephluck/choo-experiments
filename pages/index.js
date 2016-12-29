const requireAuth = require('./middleware/requireAuth')
const setPageTitle = require('./middleware/setPageTitle')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

const scaffold = require('./Scaffold')
const todos = require('./Todos')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  [ '/login', setPageTitle('Login', redirectIfAuthenticated(login())) ],
  [ '/todos', setPageTitle('Todos', requireAuth(scaffold(todos()))), [
    [ '/test', setPageTitle('Todos - Test', requireAuth(scaffold(todos(login())))) ]
  ]],
  [ '/dashboard', setPageTitle('Dashboard', requireAuth(scaffold(dashboard()))) ]
])
