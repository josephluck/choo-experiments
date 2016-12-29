const rules = function () {
  return {
    username: { presence: true },
    password: { presence: true }
  }
}

const empty = function () {
  return {
    username: 'wall-e@goodlord.co',
    password: 'CorrectHorseBatteryStaple'
  }
}

const create = function (data) {
  return {
    ...empty(),
    ...data
  }
}

module.exports = {
  rules,
  empty,
  create
}
