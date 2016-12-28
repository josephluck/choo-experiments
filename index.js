const choo = require('choo')
const css = require('sheetify')
const debug = require('./utils/debug')
const pages = require('./pages')
const models = require('./models')
css('tachyons/css/tachyons.css')

const app = choo(debug)

models.forEach((model) => app.model(model))
app.router(pages)

document.body.appendChild(app.start())
module.exports = app
