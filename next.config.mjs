/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ddun-aqua',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
