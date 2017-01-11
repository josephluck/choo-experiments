const html = require('choo/html')
const component = require('choo-component')
const widget = require('cache-element/widget')
const L = require('leaflet')

const mapWidgetInstance = ({
  setupLeafletInstance,
  teardownMap,
  setLeafletInstanceCoords
}) => {
  return widget({
    render: (coords) => {
      const initMap = (el) => {
        setupLeafletInstance({ el, coords })
      }
      const removeMap = () => {
        teardownMap()
      }
      return html`
        <div>
          <div
            style="height: 500px"
            onload=${initMap}
            onunload=${removeMap}
          ></div>
        </div>
      `
    },
    onupdate: (el, coords) => {
      setLeafletInstanceCoords(coords)
    }
  })
}

const map = () => {
  return {
    className: 'dib ba pa3 mb3',

    model: {
      namespace: 'map',

      state: {
        coords: [51.5074, 0.1278],
        leafletInstance: null,
        mapWidgetInstance: null
      },

      reducers: {
        setLeafletInstance (state, { leafletInstance }) {
          return { leafletInstance }
        },
        removeMap (state, { leafletInstance }) {
          return { leafletInstance: null }
        },
        setCoords (state, { coords }) {
          return { coords }
        },
        setMapWidgetInstance (state, { mapWidgetInstance }) {
          return { mapWidgetInstance }
        }
      },

      effects: {
        setupLeafletInstance (state, { el, coords }, send, done) {
          const leafletInstance = L.map(el).setView(coords, 12)

          send('map:setLeafletInstance', { leafletInstance }, done)

          L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
          }).addTo(leafletInstance)
        },
        teardownMap (state, { instanceId }, send, done) {
          state.instances[instanceId].leafletInstance.remove()
          send('map:removeMap')
        },
        setLeafletInstanceCoords (state, { instanceId }, send, done) {
          state.instances[instanceId].leafletInstance.setView(state.instances[instanceId].coords)
        },
        createMapInstance (state, { instanceId, ...payload }, send, done) {
          send('map:setMapWidgetInstance', { mapWidgetInstance: mapWidgetInstance(payload) })
        }
      }
    },

    view ({
      coords,
      map,
      setCoords,
      setLeafletInstanceCoords,
      setupLeafletInstance,
      teardownMap,
      mapWidgetInstance,
      createMapInstance
    } = {}) {
      if (!mapWidgetInstance) {
        createMapInstance({
          setupLeafletInstance,
          teardownMap,
          setLeafletInstanceCoords
        })
      }
      return html`
        <div>
          <button onclick=${() => {
            setCoords({ coords: [39.9526, -75.1652] })
          }}>
            To Philly
          </button>
          <button onclick=${() => {
            setCoords({ coords: [47.6062, -122.3321] })
          }}>
            To Seattle
          </button>
          ${mapWidgetInstance ? mapWidgetInstance(coords) : null}
        </div>
      `
    }
  }
}

module.exports = component(map())
