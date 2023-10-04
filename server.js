import express from 'express';
import injectRoutes from './routes';

const app = express();
const port = process.env.PORT || 5000;

injectRoutes(app);
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

export default app;
