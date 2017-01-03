let validate = () => true
if (process.env.NODE_ENV !== 'production') {
  validate = (props, propTypes) => {
    for (let prop in propTypes) {
      if (propTypes.hasOwnProperty(prop)) {
        let err = propTypes[prop](props, prop, 'name', 'prop')
        if (err) {
          console.warn(err)
          return false
        }
      }
    }
    return true
  }
}

module.exports = (comp, types) => {
  return (props) => {
    if (process.env.NODE_ENV !== 'production') {
      return validate(props, types) ? comp(props) : null
    }
    return comp(props)
  }
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.PropTypes = require('proptypes')
} else {
  module.exports.PropTypes = {}
}
