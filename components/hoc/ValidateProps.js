// Remove in production
const proptypes = require('proptypes')

// Remove in production
const validate = (props, propTypes) => {
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

module.exports = (comp, types) => {
  return (props) => {
    // Return the component if production without calling validate
    return validate(props, types) ? comp(props) : null
  }
}

// Make this an empty object in production
module.exports.PropTypes = proptypes
