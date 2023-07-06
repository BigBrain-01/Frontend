/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"lottiefiles.com"
            }
        ]
    }
}

module.exports = nextConfig
