import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const userController = new UserController();

router.post('/', userController.createUser.bind(userController));

export default router;