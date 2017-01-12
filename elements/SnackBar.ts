import html from 'choo/html'
import * as cx from 'sheetify'

// const prefix = cx`
//   :host .snack {
//     position: fixed;
//     bottom: 0rem;
//     left: 25%;
//     width: 50vw;
//     padding: 14px 24px;
//     border-top-left-radius: 2px;
//     border-top-right-radius: 2px;
//     background: #333333;
//     color: white;
//     box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.2);
//     opacity: 0.5;
//     transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
//     transform: translateY(100%);
//     z-index: 100;
//   }

//   :host .snack.--is-showing {
//     opacity: 1;
//     transform: translateY(0px);
//   }
// `
const prefix = 'snackbar'

export default ({
  showing = false,
  message = '',
  className = ''
}) => {
  return html`
    <div
      class=${`
        gmd-snack
        ${className}
      `}
    >
      <div
        class=${`
          ${prefix}
          ${showing ? '--is-showing' : ''}
        `}
      >
        ${message}
      </div>
    </div>
  `
}
