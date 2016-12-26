const choo = require('choo')
const debug = require('./utils/debug')

const app = choo(debug)

const models = require('./models')
models.forEach((model) => app.model(model))

const pages = require('./pages')
app.router(pages)

document.body.appendChild(app.start())
