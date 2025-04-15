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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: process.env.NODE_ENV === 'production' ? 'https://seouldarak.site' : '',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig 