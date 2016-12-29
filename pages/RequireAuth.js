const html = require('choo/html')

module.exports = (child = () => {}) => (state, prev, send) => {
  const onLoad = () => {
    send('auth:check', {
      onError: (err) => {
        console.error(err)
        send('location:set', 'login')
      }
    })
  }

  return html`
    <div onload=${onLoad}>
      ${child(state, prev, send)}
    </div>
  `
}
