const html = require('choo/html')
const assert = require('assert')

const removeInstanceWithId = (instances, id) => {
  const filteredInstances = Object.keys(instances)
    .filter(key => key !== id)
    .reduce((curr, prev) => Object.assign({}, instances[curr], prev), {})

  return {
    instances: filteredInstances
  }
}

const updateInstanceWithId = (instances, id, value) => {
  return {
    instances: {
      ...instances,
      [id]: value
    }
  }
}

const getDefaultListeners = (namespace, send, id, initialState) => {
  return {
    setup () {
      send(`${namespace}:setup`, {
        id: id,
        initialState: initialState
      })
    },
    teardown () {
      send(`${namespace}:clear`, {
        id: id
      })
    }
  }
}

const getDefaultReducers = () => {
  return {
    setup (state, payload) {
      return updateInstanceWithId(state.instances, payload.id, payload.initialState)
    },
    teardown (state, payload) {
      return removeInstanceWithId(state.instances, payload.id)
    }
  }
}

module.exports = (definition) => {
  assert.equal(typeof definition, 'function', 'Component must be a function')
  const component = definition()
  assert.equal(typeof component.view, 'function', 'Components view must be a function')
  assert.equal(typeof component.model, 'object', 'Components model must be a object')
  assert.equal(typeof component.behaviour, 'function', 'Components behaviour must be a function')
  assert.equal(typeof component.model.namespace, 'string', 'Components model must have a namespace')
  const defaultReducers = getDefaultReducers()
  const state = {
    ...component.model.state,
    instances: {}
  }
  const reducers = {
    ...component.model.reducers ? component.model.reducers : {},
    ...defaultReducers
  }
  return {
    model () {
      return {
        namespace: component.model.namespace,
        state: state,
        reducers: reducers
      }
    },
    component (globalState, prev, send) {
      return function (instanceId, params) {
        assert.equal(typeof instanceId, 'string', 'Component instance must have an instanceId')
        const currentInstanceState = globalState[component.model.namespace].instances[instanceId]
          ? globalState[component.model.namespace].instances[instanceId]
          : component.defaultInstanceState
            ? component.defaultInstanceState()
            : {}
        const defaultListeners = getDefaultListeners(component.model.namespace, send, instanceId, params.initialState)
        const behaviour = component.behaviour(send, instanceId)
        const props = {
          ...currentInstanceState,
          ...params.props,
          ...behaviour
        }
        return html`
          <div
            onload=${defaultListeners.setup}
            onunload=${defaultListeners.teardown}
          >
            ${component.view(props)}
          </div>
        `
      }
    }
  }
}
