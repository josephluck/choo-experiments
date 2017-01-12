import html from 'choo/html'
import * as widget from 'cache-element/widget'
import * as L from 'leaflet'
import Counter from '../components/Counter'

const Map = () => {
  let map

  return widget({
    render: (coords) => {
      console.log('render')
      return html`
        <div>
          <div
            style="height: 500px"
            onload=${(el) => initMap(el, coords)}
            onunload${removeMap}
          ></div>
        </div>
      `
    },
    onupdate: (el, coords) => {
      console.log('update')
      if (map) map.setView(coords)
    }
  })

  function initMap (el, coords) {
    console.log('init')
    const defaultZoom = 12
    map = L.map(el).setView(coords, defaultZoom)

    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    }).addTo(map)
  }

  function removeMap (el) {
    console.log('remove')
    if (map) {
      map.remove()
      map = null
    }
  }
}

const mapInstance = Map()

export default (state, prev, send) => {
  const counter = Counter.component(state, prev, send)
  const toPhiladelphia = () => {
    send('map:setCoords', [39.9526, -75.1652])
  }
  const toSeattle = () => {
    send('map:setCoords', [47.6062, -122.3321])
  }
  return html`
    <div>
      ${counter('my-counter')}
      <button onclick=${toPhiladelphia}>Philadelphia</button>
      <button onclick=${toSeattle}>Seattle</button>
      ${mapInstance(state.map.coords)}
    </div>
  `
}
