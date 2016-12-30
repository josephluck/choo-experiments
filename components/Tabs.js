const html = require('choo/html')
const ValidateProps = require('./hoc/ValidateProps')

module.exports = ValidateProps(({
  activeRoute = '',
  activeClass = 'b',
  tabs = []
}) => {
  return tabs.map((tab) => {
    return html`
      <div
        class="di"
      >
        <a
          href=${tab.href}
          class=${activeRoute === tab.href ? activeClass : ''}
        >
          ${tab.label}
        </a>
      </div>
    `
  })
}, {
  activeRoute: ValidateProps.PropTypes.string,
  activeClass: ValidateProps.PropTypes.string,
  tabs: ValidateProps.PropTypes.array
})
