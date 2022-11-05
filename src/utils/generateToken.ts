import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

// const generateToken = (data: IUser) => {
//   const payload = { id: data.id, username: data.username }; 
//   const token = jwt.sign(payload, process.env.JWT_SECRET, {
//     algorithm: 'HS256', 
//     expiresIn: '20d', 
//   });
//   return token;
// };

export default class GenerateToken {
  public jwt = jwt;

  public generateToken(data: IUser): string {
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
}
