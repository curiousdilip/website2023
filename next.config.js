/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {

                source: '/(.*)',
                headers: [
                    {
                        key: 'nextSafe',
                        value: 'isDev'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
