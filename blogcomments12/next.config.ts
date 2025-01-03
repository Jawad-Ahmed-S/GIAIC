/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;