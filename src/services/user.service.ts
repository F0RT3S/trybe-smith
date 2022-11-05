import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
// import GenerateToken from '../utils/generateToken';

export default class UserService {
  public userModel = new UserModel(); 
  
  // public generateToken = new GenerateToken();

  public jwt = jsonwebtoken;

  public generateToken(data: IUser) {
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

  async createUser(data: IUser): Promise<string> {
    const user = await this.userModel.createUser(data);

    return this.generateToken(user);
  }
}
