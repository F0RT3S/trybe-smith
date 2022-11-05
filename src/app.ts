import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/userRoute';
import ordersRoute from './routes/ordersRoute';
import login from './routes/loginRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);
app.use('/login', login);

export default app;
