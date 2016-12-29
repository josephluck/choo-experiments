const todos = require('./Todos')
const login = require('./Login')
const dashboard = require('./Dashboard')

module.exports = () => ([
  ['/todos', todos(), [
    ['/test', todos(login())]
  ]],
  ['/login', login()],
  ['/dashboard', dashboard()]
])
