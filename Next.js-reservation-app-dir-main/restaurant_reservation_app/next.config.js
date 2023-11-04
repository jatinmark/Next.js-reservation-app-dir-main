/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: 'https://reservation-app-virid.vercel.app',
          destination: 'http://localhost:3000/api/auth/signin',
        },
      ]
    },
  }
