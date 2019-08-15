const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(proxy('/api/', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/adoptions/new', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/adoptions/show', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/requests/', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/requests/show/all', { target: 'http://localhost:3000/' }));
  app.use(proxy('/api/user/', { target: 'http://localhost:3000/' }));
};
