import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  reactStrictMode: true,
};

export default nextConfig;
