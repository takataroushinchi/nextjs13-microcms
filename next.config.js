/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: false,
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "picsum.photos"],
  },
};

module.exports = nextConfig;
