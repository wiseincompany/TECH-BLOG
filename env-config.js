const debug = process.env.NODE_ENV !== 'production'
const name = 'Tech-Blog'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}
