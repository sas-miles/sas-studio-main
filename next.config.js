import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_URL // Automatically provided in Vercel
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...(NEXT_PUBLIC_SERVER_URL
        ? [NEXT_PUBLIC_SERVER_URL].map((item) => {
            const url = new URL(item)
            return {
              hostname: url.hostname,
              protocol: url.protocol.replace(':', ''),
            }
          })
        : []),
      {
        hostname: 'vvbsxhulglwtgatwygut.supabase.co', // Replace with your Supabase storage domain
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig)
