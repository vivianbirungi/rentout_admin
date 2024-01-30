/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
   output:"export",
    images: {
      domains: ['api.rentalynk.com'],
    },
 
  
}

module.exports = nextConfig
