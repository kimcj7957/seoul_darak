/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/seoul_darak', // GitHub 저장소 이름
  assetPrefix: '/seoul_darak/', // GitHub 저장소 이름
}

module.exports = nextConfig 