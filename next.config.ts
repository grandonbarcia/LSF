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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.thumbs.redditmedia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'a.thumbs.redditmedia.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
