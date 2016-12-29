require('babel-polyfill')

const choo = require('choo')
const promisify = require('./utils/promisify')
const log = require('choo-log')
const state = require('./utils/state')
const store = require('./utils/store')

const pages = require('./pages')
const models = require('./models')
const app = choo()

app.use(state())
app.use(promisify())
app.use(log()) // <-- turn off if production

models.forEach((model) => app.model(model))
store.init(app._store._models)
app.router(pages())

document.body.appendChild(app.start())

const css = require('sheetify')
css('tachyons/css/tachyons.css')

module.exports = app
