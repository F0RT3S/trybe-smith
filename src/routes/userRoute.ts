import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userMiddleware from '../middlewares/user.middleware';

const router = Router();
const { usernameMiddleware,
  classeMiddleware,
  levelMiddleware,
  passwordMiddleware } = userMiddleware;

const userController = new UserController();

router.post(
  '/', 
  usernameMiddleware,
  classeMiddleware,
  levelMiddleware,
  passwordMiddleware,
  userController.createUser.bind(userController),
);

export default router;