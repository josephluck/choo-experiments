import html from 'choo/html'

export default () => (state, prev, send) => {
  return html`
    <div>
      <a href="/tenancies/create">Create Tenancy</a>
    </div>
  `
}
