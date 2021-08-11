const { createProxyMiddleware } = require('http-proxy-middleware');

// 默认开发环境代理目标
const devDefaultTarget = 'https://ebgate.zhiketong.net';

const devProxyConfig = [{
  url: '/api'
}, {
  url: '/board-api'
}]

module.exports = function (app){
  app.use(
    ...devProxyConfig.map(ele => {
      const {url, ...otherOptions} = ele;
      return createProxyMiddleware(url, Object.assign({
        target: devDefaultTarget,
        changeOrigin: true,
        ws: true
      }, otherOptions))
    })
  )
}
