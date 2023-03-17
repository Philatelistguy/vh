/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withImages = require('next-images')
module.exports = withImages()
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
