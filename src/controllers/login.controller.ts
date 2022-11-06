import { Request, Response } from 'express';
import { ILogin } from '../interfaces/ILogin';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;
    try {
      const token = await this.loginService.login(body);
      return res.status(200).json({ token });
    } catch (error) {
      // https://stackoverflow.com/questions/60151181/object-is-of-type-unknown-typescript-generics
      if ((error as Error).message === 'Username or password invalid') {
        return res.status(401).json({ message: 'Username or password invalid' });
      }
    }
  }
}
