/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/auth/signin',
          destination: 'https://reservation-app-virid.vercel.app',
        },
      ]
    },
  }
