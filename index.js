const choo = require('choo')
const css = require('sheetify')

// Plugins
const promisify = require('barracks-promisify-plugin')
const debug = require('./utils/debug')
const state = require('./utils/state')

const pages = require('./pages')
const models = require('./models')

css('tachyons/css/tachyons.css')

const app = choo()

app.use(debug())
app.use(state())
app.use(promisify())

models.forEach((model) => app.model(model))

app.router(pages())

document.body.appendChild(app.start())

module.exports = app
