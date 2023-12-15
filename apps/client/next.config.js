/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  // Transpiled Packages means : These packages will not build themselves (convert TS to JS), rather the apps which will use them will be responsible to build them or we can say that they will convert them from TS to JS.
  transpilePackages: [
    "@course-selling-monorepo/ui",
    "db",
    "store",
    "@course-selling-monorepo/tailwind-config",
    "@course-selling-monorepo/utils"
  ],
};

module.exports = nextConfig;
