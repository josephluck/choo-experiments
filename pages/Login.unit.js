const test = require('tape')
require('jsdom-global')()
const Login = require('./Login')

test('PAGES / login / render', function (t) {
  t.plan(1)

  const state = {
    login: {
      form: {
        username: '',
        password: ''
      }
    }
  }

  const el = Login(state, state, () => {})

  t.equal(el.querySelectorAll('form').length, 1, 'Should render a from element')
  t.end()
})
