/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['scontent-cpt1-1.cdninstagram.com', 'openweathermap.org', 'i.scdn.co'],
  },
  reactStrictMode: false
}

module.exports = nextConfig
