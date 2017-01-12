const apiDomain = window.location.hostname === 'localhost' ? 'http://localhost:8000' : 'http://api.goodoverlord.com'

export default {
  environment: process.env.NODE_ENV,
  apiDomain: apiDomain,
  apiBase: `${apiDomain}/api`,
  stripeKey: process.env.STRIPE_KEY
}
