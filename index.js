const choo = require('choo')
const debug = require('./utils/debug')
const models = require('./models')
const pages = require('./pages')

const app = choo(debug)
models.forEach((model) => app.model(model))
app.router(pages)

document.body.appendChild(app.start())
