import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import productsMiddlewares from '../middlewares/products.middleware';

const router = Router();
const { productsNameMiddleware, productsAmountMiddleware } = productsMiddlewares;

const productsController = new ProductController();
router.post(
  '/', 
  productsNameMiddleware,
  productsAmountMiddleware, 
  productsController.createProduct.bind(productsController),
);
router.get('/', productsController.getAllProduct.bind(productsController));

export default router;