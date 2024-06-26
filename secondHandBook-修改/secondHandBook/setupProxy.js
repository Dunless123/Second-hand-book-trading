const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/zfbz/',
		createProxyMiddleware({
			target: 'http://10.98.1.211:41003',
			changeOrigin: true,
		})
	)
	app.use(
		'/login/',
		createProxyMiddleware({
			target: 'http://124.223.92.108:80/login',
			changeOrigin: true,
		})
	)
	app.use(
		'/pub_getInfo',
		createProxyMiddleware({
			target: 'http://10.98.1.211:41003',
			changeOrigin: true,
		})
	)
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://10.98.1.211:41003',
			changeOrigin: true,
		})
	)
}
