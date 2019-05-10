const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/requests/', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/user/', { target: 'http://localhost:3000/' }));
};
