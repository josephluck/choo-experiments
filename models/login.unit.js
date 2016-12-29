require('jsdom-global')()
const test = require('tape')
const sinon = require('sinon')
const login = require('./login')

const createPassportMock = () => ({
  login: sinon.stub(),
  fetchUser: sinon.stub()
})

const createLoginFactory = () => ({
  empty: sinon.stub()
})

const createLogin = () => {
  return login({
    passport: createPassportMock(),
    loginFactory: createLoginFactory()
  })
}

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
    username: 'username',
    password: 'gazza'
  }

  const newState = createLogin().reducers.replaceForm(state, payload)

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

  const newState = createLogin().reducers.validateForm(state)

  t.true(newState.validation.password, 'Should validate password')
  t.false(newState.validation.username, 'Should validate username')
  t.end()
})
