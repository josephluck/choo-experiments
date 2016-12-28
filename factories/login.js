const empty = () => {
  return {
    username: 'harry25190@goodlord.co',
    password: 'password'
  }
}

const create = (data) => ({ ...empty(), ...data })

module.exports = {
  empty,
  create
}
