module.exports = {
  webpack5: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})