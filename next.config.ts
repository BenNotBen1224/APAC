import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;