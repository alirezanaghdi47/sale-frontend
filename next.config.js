/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
    env:{
        // BASE_URL: 'https://sale.alirezanaghdi.ir',
        BASE_URL: 'http://localhost:3000',
        API_URL: 'https://shop.alirezanaghdi.ir',
        // API_URL: 'http://localhost:4000',
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};