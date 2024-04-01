const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ['page.js', 'page.tsx', 'page.ts', 'page.jsx', 'api.ts'],
  redirects: async () => [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ],
}

module.exports = () => {
  const plugins = []
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
    i18n,
  })
}
