{import('next').NextConfig}
const pathPrefix = process.env.NODE_ENV === 'production'
  ? 'https://njit-wis.github.io/midterm-portfolio-rv452njit/'
  : '';
const nextConfig = {
    output: 'export',
    exportTrailingSlash: true,
    basePath: '/github-pages',
    assetPrefix: 'https://njit-wis.github.io/midterm-portfolio-rv452njit/',
      env: {
        pathPrefix,
      },
}

module.exports = {nextConfig}
