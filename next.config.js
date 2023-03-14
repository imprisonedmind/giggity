/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['scontent-cpt1-1.cdninstagram.com'],
  },
  reactStrictMode: false
}

module.exports = nextConfig
