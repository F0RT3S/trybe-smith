import OrderModel from '../models/orders.model';
import { IOrder } from '../interfaces/IOrder';

export default class OrderService {
  public orderModel = new OrderModel();

  async getOrder(): Promise<IOrder[]> {
    return this.orderModel.getOrder();
  }

  async registerProduct(id: number, productsIds: number[]): Promise<IOrder> {
    return this.orderModel.registerProduct(id, productsIds);
  }
}