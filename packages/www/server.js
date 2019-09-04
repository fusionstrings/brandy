//import Koa from 'koa';
const { createConfig, createServer } = require('es-dev-server');
//const app = new Koa();
const config = createConfig({
  appIndex: () => 'hi'
});
const { app, server } = createServer(config);
server.listen(3000);