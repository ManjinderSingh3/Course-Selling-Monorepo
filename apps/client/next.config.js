/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "ui",
    "db",
    "store",
    "@course-selling-monorepo/tailwind-config",
  ],
};

module.exports = nextConfig;
