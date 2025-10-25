import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Esta linha é essencial!
  images: {
    unoptimized: true, // Necessário para export
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;