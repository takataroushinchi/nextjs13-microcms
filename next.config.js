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
  async headers() {
    const headers = [];
    // if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    headers.push({
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex",
        },
      ],
      source: "/:path*",
    });
    // }
    return headers;
  },
};

module.exports = nextConfig;
