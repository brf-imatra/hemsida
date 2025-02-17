module.exports = {
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react'],
  },
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  }
})