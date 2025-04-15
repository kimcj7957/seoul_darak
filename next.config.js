/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['kimcj7957.github.io'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://kimcj7957.github.io/seoul_darak' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/seoul_darak' : '',
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 