const html = require('choo/html')
const ValidateProps = require('./hoc/ValidateProps')

module.exports = ValidateProps(({
  activeRoute = '',
  activeClass = 'is-active',
  tabs = []
}) => {
  return html`
    <div
      class="mdl-layout__tab-bar-container"
    >
      <div class="mdl-layout__tab-bar">
        ${tabs.map((tab) => {
          return html`
            <a
              href=${tab.href}
              class=${`
                mdl-layout__tab
                ${activeRoute === tab.href ? activeClass : ''}
              `}
            >
              ${tab.label}
            </a>
          `
        })}
      </div>
    </div>
  `
}, {
  activeRoute: ValidateProps.PropTypes.string,
  activeClass: ValidateProps.PropTypes.string,
  tabs: ValidateProps.PropTypes.array
})
