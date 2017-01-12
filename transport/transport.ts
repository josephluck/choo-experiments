import rest from 'rest/browser'
import mime from 'rest/interceptor/mime'
import errorCode from 'rest/interceptor/errorCode'
import pathPrefix from 'rest/interceptor/pathPrefix'
import config from '../utils/config'
import store from '../utils/store'

const handleRequestError = () => err => {
  return {
    code: err.status.code,
    message: err.entity.error_description
  }
}

const handleRequestResponse = () => (response) => response.entity.data
const getBaseClient = () => rest.wrap(errorCode).wrap(pathPrefix, { prefix: config.apiBase })
const getFormClient = () => getBaseClient().wrap(mime, { mime: 'application/x-www-form-urlencoded' })
const getJsonClient = () => getBaseClient().wrap(mime, { mime: 'application/json' })

export default {
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
