import RemarkHTML from "remark-html";
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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "remark-loader",
          options: {
            remarkOptions: {
              plugins: [RemarkHTML],
            },
          },
        },
      ],
    })

    return config
  },
}



export default nextConfig
