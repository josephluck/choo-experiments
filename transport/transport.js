const rest = require('rest')
const mime = require('rest/interceptor/mime')
const errorCode = require('rest/interceptor/errorCode')
const pathPrefix = require('rest/interceptor/pathPrefix')
const config = require('../utils/config')
const store = require('../utils/store')

const handleRequestError = () => err => {
  throw new Error(err)
}

const handleRequestResponse = () => (response) => response.entity.data
const getBaseClient = () => rest.wrap(errorCode).wrap(pathPrefix, { prefix: config.apiBase })
const getFormClient = () => getBaseClient().wrap(mime, { mime: 'application/x-www-form-urlencoded' })
const getJsonClient = () => getBaseClient().wrap(mime, { mime: 'application/json' })

module.exports = {
  makeFormRequest (request) {
    const handleResponse = () => (response) => response.entity
    const make = getFormClient()
    return make(request).then(handleResponse()).catch(handleRequestError())
  },

  makeUnauthenticatedRequest (request) {
    const make = getJsonClient()
    return make(request).then(handleRequestResponse()).catch(handleRequestError())
  },

  makeRequest (req) {
    const make = getJsonClient()
    const request = {
      ...req,
      headers: {
        Authorization: `Bearer ${store.state.auth.accessToken}`,
        ...req.headers
      }
    }
    return make(request).then(handleRequestResponse()).catch(handleRequestError())
  }
}
