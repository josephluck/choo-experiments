const choo = require('choo')
const html = require('choo/html')
const debug = require('./debug')
const app = choo(debug)

const models = [
  require('./models/todos')
]

models.forEach(model => app.model(model))

app.router([
  ['/', require('./pages/Todos')]
])

document.body.appendChild(app.start())
