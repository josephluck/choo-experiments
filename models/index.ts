import login from './login'
import auth from './auth'
import user from './user'
import material from './material'
import counter from '../components/Counter'
import ripple from '../components/Ripple'
import mapModel from '../components/Map'

export default [
  login(),
  auth(),
  user(),
  material(),
  counter.model,
  ripple.model,
  mapModel.model
]
