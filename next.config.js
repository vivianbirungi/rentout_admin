/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  basePath: isProd ? '/rentout_admin/dashboard/property':'',
   output: "export",
  images: {
    domains: [
      'api.rentalynk.com',
      'www.rentalynk.com',
    ],
  },
};

module.exports = nextConfig;
