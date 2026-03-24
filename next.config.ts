import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tndkapital.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
