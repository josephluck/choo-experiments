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
    }
  }

  const form = {
    username: 'username',
    password: 'gazza'
  }

  const newState = createLogin().reducers.replaceForm(state, { form })

  t.equal(newState.form.username, 'username', 'Should update username')
  t.equal(newState.form.password, 'gazza', 'Should update password')
  t.end()
})

test('MODELS / login / validate form', function (t) {
  t.plan(2)

  const form = () => {
    return {
      username: 'hey',
      password: ''
    }
  }

  const state = {
    form: form(),
    validation: {}
  }

  const newState = createLogin().reducers.validateForm(state, { form: form() })

  t.true(newState.validation.password, 'Should validate password')
  t.false(newState.validation.username, 'Should validate username')
  t.end()
})
