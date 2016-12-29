// Wrap a reducer with localstorage sync
module.exports = (name, fn) => {
  return (state, payload) => {
    const res = fn(state, payload)
    window.localStorage.setItem(name, JSON.stringify(res))
    return res
  }
}
