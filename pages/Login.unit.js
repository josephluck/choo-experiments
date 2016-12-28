const test = require('tape')
const sinon = require('sinon')
require('jsdom-global')()
const Login = require('./Login')

test('PAGES / login / render', function (t) {
  t.plan(2)

  const state = {
    login: {
      form: {
        username: 'Joseph',
        password: ''
      }
    }
  }

  const el = Login()(state, state, () => {})

  t.equal(el.querySelectorAll('form').length, 1, 'Should render a from element')
  t.equal(el.querySelectorAll('input')[0].value, 'Joseph', 'Should render a username input')
  t.end()
})

test('PAGES / login / render child', function (t) {
  t.plan(1)

  const child = sinon.stub()
  const state = {
    login: {
      form: {}
    }
  }
  const send = () => {}

  Login(child)(state, state, send)

  t.true(child.calledOnce, 'Should accept a child view')
  t.end()
})
