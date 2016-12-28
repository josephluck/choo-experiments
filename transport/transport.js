const rest = require('rest')
const mime = require('rest/interceptor/mime')
const errorCode = require('rest/interceptor/errorCode')
const pathPrefix = require('rest/interceptor/pathPrefix')
const config = require('../utils/config')

const handleRequestError = () => {
  return err => {
    throw new Error(err)
  }
}

const handleRequestResponse = () => response => response.entity.data

const getBaseClient = () => rest.wrap(errorCode).wrap(pathPrefix, { prefix: config.apiBase })
const getFormClient = () => getBaseClient().wrap(mime, { mime: 'application/x-www-form-urlencoded' })
const getJsonClient = () => getBaseClient().wrap(mime, { mime: 'application/json' })

module.exports = {
  makeFormRequest (request) {
    const make = getFormClient()

    return make(request)
      .then(response => response.entity)
      .catch(handleRequestError())
  },

  /**
  * Make a request disregarding authentication
  * @param  {Object} request The request object
  * @return {Promise}
  */
  makeUnauthenticatedRequest (request) {
    const make = getJsonClient()

    return make(request).then(handleRequestResponse()).catch(handleRequestError())
  },

  /**
   * Make a request having ensured we are still authenticated
   * @param  {Object} request The request object
   * @return {Promise}
   */
  makeRequest (request) {
    const make = getJsonClient()

    const requestWithHeaders = {
      ...request,
      headers: {
        Authorization: 'token',
        ...request.headers
      }
    }

    return make(requestWithHeaders).then(handleRequestResponse()).catch(handleRequestError())
  }
}
