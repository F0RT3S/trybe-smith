import jsonwebtoken from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/login.model';

export default class LoginService {
  public loginModel = new LoginModel();

  public jwt = jsonwebtoken;

  public generateToken(data: ILogin) {
    const payload = { id: data.id, username: data.username }; 
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { 
        algorithm: 'HS256', 
        expiresIn: '20d', 
      },
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