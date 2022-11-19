// @ts-check

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  //swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    swcFileReading: true,
    externalDir: true,
    appDir: true,
    allowMiddlewareResponseBody: true,
    serverComponentsExternalPackages: ['prisma'],
    swcPlugins: [
      [
        'next-superjson-plugin',
        {
          excluded: [],
        },
      ],
      ['@swc-jotai/debug-label', {}],
      ['@swc-jotai/react-refresh', {}],
    ],
  },
};
// export default nextConfig;
export default withVanillaExtract(nextConfig);
