/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.simpleicons.org'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
