module.exports = (title, child) => (state, prev, send) => {
  const baseTitle = 'Goodlord - Property Done Right'

  if (title) {
    window.document.title = `${title} | ${baseTitle}`
  } else {
    window.document.title = baseTitle
  }
  return child(state, prev, send)
}
