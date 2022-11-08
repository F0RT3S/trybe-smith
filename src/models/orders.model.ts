import { RowDataPacket, ResultSetHeader } from 'mysql2';
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

  async registerProduct(id: number, productsIds: number[]): Promise<IOrder> {    
    const [order] = await this.connection.execute<IOrder[] & ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );
    const { insertId } = order;

    await Promise.all(productsIds.map(async (ids) => {
      const [update] = await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = (?) WHERE id = ?',
        [insertId, ids],
      ); 
      return update;
    }));

    return { userId: id, productsIds } as IOrder;
  }
}