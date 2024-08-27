/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow Next.js to handle image optimization for images hosted on openweathermap.org
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
        },
      ],
    },
  
    // Set reactStrictMode to false (optional, adjust based on your project's needs)
    reactStrictMode: true,
  };
  
  export default nextConfig;
