const html = require('choo/html')

module.exports = ({
  activeRoute = '',
  tabs = []
}) => {
  return tabs.map((tab) => {
    const active = activeRoute === tab.href
    return html`
      <div
        class="di"
      >
        <a
          href=${tab.href}
          class=${active ? 'b' : ''}
        >
          ${tab.label}
        </a>
      </div>
    `
  })
}
