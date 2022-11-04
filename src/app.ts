import express from 'express';
import allRoutes from './routes/allRoutes';

const app = express();

app.use(express.json());

app.use('/products', allRoutes);

export default app;
