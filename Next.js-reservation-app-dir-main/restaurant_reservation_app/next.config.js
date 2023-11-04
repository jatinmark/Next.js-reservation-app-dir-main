/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/auth/signin',
          destination: 'http://localhost:3000/api/auth/signin',
        },
      ]
    },
  }
