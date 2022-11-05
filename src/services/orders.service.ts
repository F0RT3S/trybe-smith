import OrderModel from '../models/orders.model';
import { IOrder } from '../interfaces/IOrder';

export default class OrderService {
  public orderModel = new OrderModel();

  async getOrder(): Promise<IOrder[]> {
    return this.orderModel.getOrder();
  }
}