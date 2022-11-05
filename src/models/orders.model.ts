import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  private connection = mysql;

  async getOrder(): Promise<IOrder[]> {
    const [order] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds 
      FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products ON Orders.id = Products.orderId 
      GROUP BY Orders.id;`,
    );
    return order;
  }
}