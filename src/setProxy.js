const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://3.35.38.11:8081',
      changeOrigin: true,
    })
  );
};
