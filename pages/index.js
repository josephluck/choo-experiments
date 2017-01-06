const requireAuth = require('./middleware/requireAuth')
const setPageTitle = require('./middleware/setPageTitle')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

const scaffold = require('./Scaffold')
const login = require('./Login')
const dashboard = require('./Dashboard')
const createTenancy = require('./tenancies/Create')
const components = require('../elements')

module.exports = () => ([
  [ '/login', setPageTitle(redirectIfAuthenticated(login()), 'Login') ],
  [ '/dashboard', setPageTitle(requireAuth(scaffold(dashboard())), 'Dashboard') ],
  [ '/tenancies/create', setPageTitle(requireAuth(scaffold(createTenancy())), 'Create Tenancy') ],
  [ '/components', setPageTitle(components(), 'Components') ]
])
