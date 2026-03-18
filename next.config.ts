import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  serverExternalPackages: ['payload', '@payloadcms/db-postgres'],
}

export default withPayload(nextConfig)
