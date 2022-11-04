import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  async createUser(req: Request, res: Response) {
    const data = req.body;

    const token = await this.userService.createUser(data);
    return res.status(201).json({ token });
  }
}