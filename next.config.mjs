/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aster.cat'
      },
      {
        protocol: 'https',
        hostname: '**'
      }

    ]
  }
};

export default nextConfig;
