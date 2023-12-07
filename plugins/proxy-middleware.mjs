import { createProxyMiddleware } from 'http-proxy-middleware';

export default function proxyMiddleware (context, options) {
  const apiProxy = createProxyMiddleware(context, options);

  return {
    name: 'proxy',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use(apiProxy);
      },
    },
  };
}
