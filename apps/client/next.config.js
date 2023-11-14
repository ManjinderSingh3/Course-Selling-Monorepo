/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  transpilePackages: [
    "@course-selling-monorepo/ui",
    "db",
    "store",
    "@course-selling-monorepo/tailwind-config",
    "@course-selling-monorepo/utils"
  ],
};

module.exports = nextConfig;
