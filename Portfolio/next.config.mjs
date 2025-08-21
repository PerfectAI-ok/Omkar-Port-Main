/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true,
  },
  images: {
    domains: ['randomuser.me','images.unsplash.png'], // Add any other image domains you're using
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  
};

export default nextConfig;
