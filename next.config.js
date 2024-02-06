/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  images: {
    domains: [
      'api.rentalynk.com',
      'www.rentalynk.com',
    ],
  },
};

module.exports = nextConfig;
