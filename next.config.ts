import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/best',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
