const html = require('choo/html')

module.exports = ({
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
}
