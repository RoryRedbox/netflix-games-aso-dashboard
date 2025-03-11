/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.example.com'],
  },
  // Environment variables that can be accessed by the client
  env: {
    APP_NAME: 'Netflix Games ASO Dashboard',
    APP_VERSION: '1.0.0',
  },
}

module.exports = nextConfig