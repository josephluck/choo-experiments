require('babel-polyfill')

const css = require('sheetify')
const choo = require('choo')
const app = choo()

// Plugins
const promisify = require('./utils/promisify')
const storeify = require('./utils/storeify')()
app.use(promisify())
app.use(storeify)
if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

// Models
const models = require('./models')
models.forEach((model) => app.model(model))
storeify.init(app._store._models)

// Pages
const pages = require('./pages')
app.router(pages())

// Bootstrap
document.body.appendChild(app.start())

// Css
css('tachyons/css/tachyons.css')
css('tachyons-flexbox/css/tachyons-flexbox.css')
css('./styles/core.css')

module.exports = app
