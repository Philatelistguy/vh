/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const securityHeaders=[
  {
    key:"Created-by-Anish",
    value:"True"
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }


]


const hd={
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

const pwaconfig = 
{

    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,

};
const nextConfig = {
  reactStrictMode: true,
}
const withPWA = require("next-pwa")(pwaconfig);
const withImages = require('next-images')
module.exports =  withPWA(withImages(hd,nextConfig))
