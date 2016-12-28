const timeout = 1000

const store = {
  state: {},

  getAll: (storeName) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(JSON.parse(window.localStorage[storeName]))
        } catch (e) {
          resolve([])
        }
      }, timeout)
    })
  },

  add: (storeName, item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        store.getAll(storeName).then((items) => {
          items.push(item)
          window.localStorage[storeName] = JSON.stringify(items)
          resolve(item)
        })
      }, timeout)
    })
  },

  replace: (storeName, index, item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        store.getAll(storeName).then((items) => {
          items[index] = item
          window.localStorage[storeName] = JSON.stringify(items)
          resolve(item)
        })
      }, timeout)
    })
  }
}

module.exports = store
