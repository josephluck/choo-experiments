import html from 'choo/html'

export default (child) => (state, prev, send) => {
  if (state.auth.accessToken) {
    console.info('Redirecting to dashboard')
    send('location:set', 'dashboard')
    return html`<div></div>`
  }

  return html`${child(state, prev, send)}`
}
