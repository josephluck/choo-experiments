const timeout = 1000

const store = {
  getAll: (storeName, cb) => {
    setTimeout(() => {
      try {
        cb(JSON.parse(window.localStorage[storeName]))
      } catch (e) {
        cb([])
      }
    }, timeout)
  },
  add: (storeName, item, cb) => {
    setTimeout(() => {
      store.getAll(storeName, (items) => {
        items.push(item)
        window.localStorage[storeName] = JSON.stringify(items)
        cb()
      })
    }, timeout)
  },
  replace: (storeName, index, item, cb) => {
    setTimeout(() => {
      store.getAll(storeName, (items) => {
        items[index] = item
        window.localStorage[storeName] = JSON.stringify(items)
        cb()
      })
    }, timeout)
  }
}

module.exports = store
