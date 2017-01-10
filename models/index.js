module.exports = [
  require('./login')({}),
  require('./auth')({}),
  require('./user')({}),
  require('./material')({}),
  require('../components/Counter').model,
  require('../components/Ripple').model,
  require('./map')({})
]
