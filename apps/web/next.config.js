/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@course-selling-monorepo/ui",
    "@course-selling-monorepo/tailwind-config",
    "@course-selling-monorepo/utils",
    "db",
    "store",
  ],
};

module.exports = nextConfig;