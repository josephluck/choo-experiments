module.exports = () => {
  return {
    namespace: 'ui',

    state: {
      // focus: null
    },

    reducers: {
      // setFocus (state, { elm }) {
      //   return {
      //     focus: elm
      //   }
      // },

      // removeFocus (state) {
      //   return {
      //     focus: null
      //   }
      // }
    },

    subscriptions: {
      // onFocus (send, done) {
      //   document.addEventListener('focus', (e) => {
      //     send('ui:setFocus', {
      //       id: e.target
      //     })
      //   }, true)
      // },

      // onBlur (send, done) {
      //   document.addEventListener('blur', () => {
      //     send('ui:removeFocus')
      //   }, true)
      // }
    }
  }
}
