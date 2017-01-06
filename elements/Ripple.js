const html = require('choo/html')
const css = require('sheetify')

const rippleContainerStyles = css`
  :host {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
`

const rippleEffectStyles = css`
  @keyframes ripple-animation {
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
  :host {
    position: absolute;
    margin-top: -10px;
    margin-left: -10px;
    transform-origin: center center;
    transform: scale(0);
    opacity: 1;
    pointer-events: none;
    animation: ripple-animation .75s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
  }
  :host > .ripple-el {
    fill: rgba(0, 0, 0, 0.2);
  }
`

const Ripple = (top, left) => {
  return html`
    <svg
      height="20"
      width="20"
      class=${rippleEffectStyles}
      style="top: ${top}px; left: ${left}px"
    >
      <circle
        class="ripple-el"
        cx="10"
        cy="10"
        r="10"
      />
    </svg>
  `
}

const rip = (elm) => (e) => {
  const top = e.pageY - elm.offsetTop
  const left = e.pageX - elm.offsetLeft
  const ripple = Ripple(top, left)
  elm.appendChild(ripple)
  window.setTimeout(() => {
    if (elm.contains(ripple)) {
      elm.removeChild(ripple)
    }
  }, 750)
}

const onLoad = (elm) => {
  elm.addEventListener('mousedown', rip(elm), true)
}

const onUnload = (elm) => {
  elm.removeEventListener('mousedown', rip(elm), true)
}

module.exports = (elm) => (props) => {
  if (props.ripple) {
    return html`
      <div
        onload=${onLoad}
        onunload=${onUnload}
        class=${`
          ${rippleContainerStyles}
          ${props.rippleClass || ''}
        `}
      >
        ${elm(props)}
      </div>
    `
  }
  return elm(props)
}
