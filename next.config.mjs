// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['*'], // This allows images from any domain
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/**', // Allows any path on picsum.photos
        },
      ],
    },
    exportTrailingSlash: true,
    output : 'export',
  };
  
  export default nextConfig;
  