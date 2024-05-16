require('dotenv').config()

const basePath = process.env.BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
