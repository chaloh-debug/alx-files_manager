import express from 'express';
import startServer from './libs/boot';
import injectMiddlewares from './libs/middlewares';
import injectRoutes from './routes';

const app = express();
const port = process.env.PORT || 5000;

injectRoutes(app);
injectMiddlewares(app);
startServer(app, port);

export default app;
