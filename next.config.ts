import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [new URL("https://fakestoreapi.com/**")],
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
