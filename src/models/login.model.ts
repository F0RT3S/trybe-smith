import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ILogin } from '../interfaces/ILogin';

export default class LoginModel {
  private connection = mysql;

  async login(data: ILogin): Promise<ILogin> {
    const { username, password } = data;

    const [infoLogin] = await this.connection.execute <ILogin & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return infoLogin;
  }
}