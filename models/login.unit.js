const test = require('tape')
const login = require('./login')()

test('MODELS / login / update form', function (t) {
  t.plan(2)

  const state = {
    form: {
      username: '',
      password: ''
    },
    shouldBeLeftUnchanged: true
  }
  const payload = {
    key: 'username',
    value: 'Gazza'
  }

  const newState = login.reducers.updateKey(state, payload)

  t.equal(newState.form.username, 'Gazza', 'Should receive login')
  t.equal(newState.shouldBeLeftUnchanged, true, 'Should retain other state')
  t.end()
})

test('MODELS / login / validate form', function (t) {
  t.plan(2)

  const state = {
    form: {
      username: 'hey',
      password: ''
    },
    validation: {}
  }

  const newState = login.reducers.validateForm(state)

  t.true(newState.validation.password, 'Should validate password')
  t.false(newState.validation.username, 'Should validate username')
  t.end()
})
