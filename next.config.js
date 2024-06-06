const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL,
      },
    ];
  },
  webpack(config, { isServer }) {
    // Add custom file loader for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/videos/',
          publicPath: `/_next/static/videos/`,
        },
      },
    });

    // Resolve alias for easier imports
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};

module.exports = nextConfig;
