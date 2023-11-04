/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: 'http://localhost:3000/api/auth/signin',
          destination: 'https://reservation-app-virid.vercel.app',
        },
      ]
    },
  }
