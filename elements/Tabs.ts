import html from 'choo/html'

export default ({
  activeRoute,
  activeClass,
  tabs
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
}
