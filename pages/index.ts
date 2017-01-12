import requireAuth from './middleware/requireAuth'
import setPageTitle from './middleware/setPageTitle'
import redirectIfAuthenticated from './middleware/redirectIfAuthenticated'

import scaffold from './Scaffold'
import login from './Login'
import dashboard from './Dashboard'
import createTenancy from './tenancies/Create'
import components from '../elements'
import map from './Map'

export default () => ([
  [ '/login', setPageTitle(redirectIfAuthenticated(login()), 'Login') ],
  [ '/dashboard', setPageTitle(requireAuth(scaffold(dashboard())), 'Dashboard') ],
  [ '/tenancies/create', setPageTitle(requireAuth(scaffold(createTenancy())), 'Create Tenancy') ],
  [ '/map', setPageTitle(requireAuth(scaffold(map)), 'Map') ],
  [ '/components', setPageTitle(scaffold(components()), 'Components') ]
])
