/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
