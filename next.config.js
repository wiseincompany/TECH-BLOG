/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com', 'nextjs.org/docs'],
    formats: ['image/avif', 'image/webp'],
  },
}
