/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    unoptimized: true,
    domains: ["localhost", "vercel.app", "ayedot.com", "render.com"],
  },
  experimental: {
    buildOptimizer: false,
  }
};
