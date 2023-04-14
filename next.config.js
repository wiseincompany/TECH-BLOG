/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = 'Tech-Blog'
module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${name}/` : '',
  trailingSlash: true,
}
