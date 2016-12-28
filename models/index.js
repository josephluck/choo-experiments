const store = require('../utils/store')

module.exports = [
  require('./todos')({ store }),
  require('./login')(),
  require('./auth')()
]
