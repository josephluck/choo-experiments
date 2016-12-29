const requireAuth = require('./middleware/requireAuth')
const setPageTitle = require('./middleware/setPageTitle')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

const todos = require('./Todos')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  [ '/login', setPageTitle('Login', redirectIfAuthenticated(login())) ],
  [ '/todos', setPageTitle('Todos', requireAuth(todos())), [
    [ '/test', setPageTitle('Todos - Test', requireAuth(todos(login()))) ]
  ]],
  [ '/dashboard', setPageTitle('Dashboard', requireAuth(dashboard())) ]
])
