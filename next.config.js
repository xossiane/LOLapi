/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/APICall/:proxyServer.js',
        destination: 'http://localhost:4000/api/APICall/:proxyServer.js'
      }
    ]
  }
}
