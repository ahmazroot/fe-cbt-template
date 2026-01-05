import type { NextConfig } from 'next';

// Import and validate environment variables
import './env';

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Optimize images
  images: {
    remotePatterns: [
      // Add your image domains here
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
