/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    env:{
        BASE_URL: 'https://sale.alirezanaghdi.ir',
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};