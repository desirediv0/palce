/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.themeim.com",
      },
    ],
  },
};

export default nextConfig;
