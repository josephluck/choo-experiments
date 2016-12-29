const promisifySend = function (send) {
  return (action, data) => {
    return new Promise((resolve, reject) => {
      try {
        send(action, data, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}

module.exports = () => ({
  wrapSubscriptions: fn => {
    return (send, done) => {
      const newSend = promisifySend(send)
      return Promise.resolve(fn(newSend)).catch(err => done(err))
    }
  },
  wrapEffects: fn => {
    return (data, state, send, done) => {
      const newSend = promisifySend(send)
      return Promise.resolve(fn(data, state, newSend))
        .then(res => done(null, res))
        .catch(err => done(err))
    }
  }
})
