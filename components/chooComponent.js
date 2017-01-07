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

module.exports = (component) => {
  assert.equal(typeof component, 'object', 'Component must be an object')
  assert.equal(typeof component.view, 'function', 'Components view must be a function')
  assert.equal(typeof component.model, 'object', 'Components model must be an object')
  assert.equal(typeof component.behaviour, 'function', 'Components behaviour must be a function')
  assert.equal(typeof component.model.namespace, 'string', 'Components model must have a namespace')
  assert.equal(typeof component.model.reducers, 'object', 'Components model have a reducers object')

  const defaultReducers = getDefaultReducers()
  const componentReducers = component.model.reducers ? component.model.reducers : {}
  const reducers = {
    ...componentReducers,
    ...defaultReducers
  }
  const effects = component.model.effects ? component.model.effects : {}
  return {
    model () {
      return {
        namespace: component.model.namespace,
        state: {
          instances: {}
        },
        reducers: reducers,
        effects: effects
      }
    },
    component (globalState, prev, send) {
      return function (instanceId, params) {
        assert.equal(typeof instanceId, 'string', 'Component instance must have an instanceId')

        const behaviour = component.behaviour(send, instanceId)
        const props = params ? params.props : {}
        const currentInstanceState = globalState[component.model.namespace].instances[instanceId]
          ? globalState[component.model.namespace].instances[instanceId]
          : component.model.state
            ? component.model.state
            : {}
        const initialState = params && params.initialState
          ? params.initialState
          : component.model.state
            ? component.model.state
            : {}

        return html`
          <div
            onload=${function () {
              send(`${component.model.namespace}:setup`, {
                id: instanceId,
                initialState: initialState
              })
            }}
            onunload=${function () {
              send(`${component.model.namespace}:clear`, {
                id: instanceId
              })
            }}
          >
            ${component.view({
              ...behaviour,
              ...props,
              ...currentInstanceState
            })}
          </div>
        `
      }
    }
  }
}
