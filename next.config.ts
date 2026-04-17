import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tndkapital.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.tndk.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.antigravity.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
