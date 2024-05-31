/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "ibb.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
