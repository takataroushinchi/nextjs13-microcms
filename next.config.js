/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
