import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductController();
router.post('/', productsController.createProduct.bind(productsController));
router.get('/', productsController.getAllProduct.bind(productsController));

export default router;