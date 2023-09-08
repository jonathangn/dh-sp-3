/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
    esmExternals: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.perssondennis.com',
      },
    ],
    domains: ['images.pexels.com', 'www.wallpaperuse.com']
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX(nextConfig)

