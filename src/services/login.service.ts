import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/login.model';

export default class LoginService {
  public loginModel = new LoginModel();

  public jwt = jsonwebtoken;

  public generateToken(data: any) {
    const payload = { id: data[0].id, username: data[0].username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
    );
  }

  async login(data: ILogin): Promise<string> {    
    const login = await this.loginModel.login(data);

    if (login.length === 0) {
      throw new Error('Username or password invalid');
    }
    
    return this.generateToken(login);
  }
}