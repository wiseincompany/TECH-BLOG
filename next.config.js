/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
