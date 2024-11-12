/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
