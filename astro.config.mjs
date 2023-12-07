import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import proxyMiddleware from './plugins/proxy-middleware.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    proxyMiddleware('/api', {
      target: 'http://192.168.86.51:4321',
      changeOrigin: true,
    }),
  ]
});