/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:proxyServer.js',
        destination: 'http://localhost:4000/api/:proxyServer.js'
      }
    ]
  }
}
