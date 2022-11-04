import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';
import { IAllProducts } from '../interfaces/IAllProducts';

export default class ProductModel {
  private connection = mysql;

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [arrResult] = result;
    const { insertId } = arrResult;
    return { id: insertId, ...product };
  }

  async getAllProduct(): Promise<IAllProducts[]> {
    const [allProduct] = await this.connection.execute<IAllProducts[] & RowDataPacket[]>(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products',
    );
    return allProduct;
  }
}