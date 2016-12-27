const todos = require('./Todos')
const login = require('./Login')

module.exports = [
  ['/todos', todos(), [
    ['/test', todos(login)]
  ]],
  ['/login', login]
]
