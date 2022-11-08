import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public orderService = new OrderService();

  async getOrder(_req: Request, res: Response) {
    const order = await this.orderService.getOrder();
    return res.status(200).json(order);
  }

  async registerProduct(req: Request, res:Response) {
    const { id } = req.body.user;
    const { productsIds } = req.body;
    
    const register = await this.orderService.registerProduct(id, productsIds);
    return res.status(201).json(register);
  }
}