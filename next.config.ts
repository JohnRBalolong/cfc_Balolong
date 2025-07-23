import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Add this line here for static export
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;