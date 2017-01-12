import polyfill from 'babel-polyfill'
import * as css from 'sheetify'
import * as choo from 'choo'
import * as log from 'choo-log'
import promisify from './utils/promisify'
import storeify from './utils/storeify'
import models from './models'
import pages from './pages'

const app = choo()

app.use(promisify())
app.use(storeify)
if (process.env.NODE_ENV !== 'production') {
  app.use(log())
}

models.forEach((model) => app.model(model))
storeify.init(app._store._models)
app.router(pages())

// Bootstrap
document.body.appendChild(app.start())

// Css
css('tachyons/css/tachyons.css')
css('tachyons-flexbox/css/tachyons-flexbox.css')
css('leaflet/dist/leaflet.css')
css('./styles/core.css')

export default app
