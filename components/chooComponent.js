const html = require('choo/html')

const removeInstanceWithId = (instances, id) => {
  const combineObject = (curr, prev) => {
    return {
      ...instances[curr],
      ...prev
    }
  }
  return {
    instances: Object.keys(instances).filter(key => key !== id).reduce(combineObject, {})
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
  const component = definition()
  const model = component.model()
  const defaultReducers = getDefaultReducers(component.defaultState)
  return {
    model () {
      return {
        namespace: model.namespace,
        state: {
          ...model.state,
          instances: {}
        },
        reducers: {
          ...model.reducers,
          ...defaultReducers
        }
      }
    },
    component (globalState, prev, send) {
      return function (id, params) {
        const currentInstanceState = globalState[model.namespace].instances[id] ? globalState[model.namespace].instances[id] : component.defaultState()
        const defaultListeners = getDefaultListeners(model.namespace, send, id, params.initialState)
        const behaviour = component.behaviour(send, id)
        const props = {
          ...defaultListeners,
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
