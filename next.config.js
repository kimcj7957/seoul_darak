/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['seouldarak.site'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://seouldarak.site' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig 