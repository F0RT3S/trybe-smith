import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';
import productsIdsMandatory from '../middlewares/order.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getOrder.bind(orderController));
router.post(
  '/', 
  authMiddleware,
  productsIdsMandatory,
  orderController.registerProduct.bind(orderController),
);

export default router;