/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['highstrangeness.app'],
    unoptimized: false,
  },
}

module.exports = nextConfig
