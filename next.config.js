/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, dev }) => {
    // Disable webpack caching to avoid pack file cache errors
    if (dev) {
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig

