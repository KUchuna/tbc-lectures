const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's.gravatar.com'
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co'
        },
        {
          protocol: 'https',
          hostname: 'q21gy4sbxwzqo2lf.public.blob.vercel-storage.com'
        },
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
  