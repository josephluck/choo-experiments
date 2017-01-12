export const rules = function () {
  return {
    username: { presence: true },
    password: { presence: true }
  }
}

export const empty = function () {
  return {
    username: 'wall-e@goodlord.co',
    password: 'CorrectHorseBatteryStaple'
  }
}

export const create = function (data) {
  return {
    ...empty(),
    ...data
  }
}

export default {
  rules,
  empty,
  create
}
