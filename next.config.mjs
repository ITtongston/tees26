/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', 
          port: '',
          pathname: '/**', 
        },
      ],
    },
    env: {
    MONGODB_URI: process.env.MONGODB_URI,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_USER_TEMPLATE_ID: process.env.EMAILJS_USER_TEMPLATE_ID,
    EMAILJS_ADMIN_TEMPLATE_ID: process.env.EMAILJS_ADMIN_TEMPLATE_ID,
  },
   // Suppress extension-related warnings
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
  // Additional error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  };
  
  export default nextConfig;
  