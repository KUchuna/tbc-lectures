const nextConfig = {
    images: { domains: ['cdn.dummyjson.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's.gravatar.com'
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        }
      ]
     },
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
        {
          source: '/blog/:slug',
          destination: '/news/:slug',
          permanent: true,
        },
      ];
    },
  };

export default nextConfig;
  