/** @type {import('next').NextConfig} */

const withPwa = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPwa({
  experimental: {
    appDir: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: [
      "scontent-cpt1-1.cdninstagram.com",
      "openweathermap.org",
      "i.scdn.co",
      "scontent-jnb1-1.cdninstagram.com",
      "advtujketcscxuaodzcw.supabase.co",
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
});
