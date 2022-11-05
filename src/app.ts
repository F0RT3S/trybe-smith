import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/userRoute';
import ordersRoute from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);

export default app;
