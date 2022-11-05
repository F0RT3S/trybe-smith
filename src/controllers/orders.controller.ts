import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public orderService = new OrderService();

  async getOrder(req: Request, res: Response) {
    const order = await this.orderService.getOrder();
    return res.status(200).json(order);
  }
}