/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wallpapercave.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;
