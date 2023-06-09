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
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
      "source.unsplash.com",
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
