import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  trailingSlash: true
};

export default nextConfig;
