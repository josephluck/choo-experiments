const html = require('choo/html')
const assert = require('assert')

// Create onload and onunload reducers to initiate and
// garbage collect an instance of a component when
// onload and onunload lifecycle methods are called
// setup sets the default state in the component
// and teardown removes an instance from the state
const getDefaultReducers = () => {
  return {
    setup (state, payload) {
      return {
        instances: {
          ...state.instances,
          [payload.id]: payload.initialState
        }
      }
    },
    teardown (state, payload) {
      return {
        instances: Object.keys(state.instances)
          .filter(key => key !== payload.id)
          .reduce((curr, prev) => Object.assign({}, state.instances[curr], prev), {})
      }
    }
  }
}

// Wrap reducers so that functions in the component
// receive instance state rather than global state
// note that for this to work, reducers need to be
// send object payloads
const generateReducers = (reducers) => {
  return Object.keys(reducers).reduce((curr, key) => {
    const enhancedPayload = (state, payload) => {
      return {
        instances: {
          ...state.instances,
          [payload.id]: {
            ...state.instances[payload.id],
            ...reducers[key](state.instances[payload.id], payload)
          }
        }
      }
    }
    return {
      ...curr,
      [key]: enhancedPayload
    }
  }, {})
}

// Create glue between the components methods and
// the components reducers.
// note that for this to work, reducers need to be
// send object payloads
const generateBehaviour = (reducers, send, instanceId, namespace, state) => {
  return Object.keys(reducers).reduce((curr, key) => {
    return {
      ...curr,
      [key]: (payload) => {
        assert.equal(typeof payload, 'object', `reducer ${key}: payload must be an object`)
        send(`${namespace}:${key}`, {id: instanceId, ...payload})
      }
    }
  }, {})
}

module.exports = (component) => {
  assert.equal(typeof component, 'object', 'Component must be an object')
  assert.equal(typeof component.view, 'function', 'Components view must be a function')
  assert.equal(typeof component.model, 'object', 'Components model must be an object')
  assert.equal(typeof component.model.namespace, 'string', 'Components model must have a namespace')
  assert.equal(typeof component.model.reducers, 'object', 'Components model have a reducers object')

  const reducers = {
    ...generateReducers(component.model.reducers ? component.model.reducers : {}),
    ...getDefaultReducers()
  }

  return {
    model () {
      return {
        namespace: component.model.namespace,
        state: {
          instances: {}
        },
        reducers: reducers,
        effects: component.model.effects ? component.model.effects : {}
      }
    },
    component (globalState, prev, send) {
      return function (instanceId, params) {
        assert.equal(typeof instanceId, 'string', 'Component instance must have an instanceId')
        const behaviour = generateBehaviour(reducers, send, instanceId, component.model.namespace, globalState)

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
