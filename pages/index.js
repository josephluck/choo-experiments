const requireAuth = require('./middleware/requireAuth')
const setPageTitle = require('./middleware/setPageTitle')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

const scaffold = require('./Scaffold')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  [ '/login', setPageTitle('Login', redirectIfAuthenticated(login())) ],
  [ '/dashboard', setPageTitle('Dashboard', requireAuth(scaffold(dashboard()))) ]
])
