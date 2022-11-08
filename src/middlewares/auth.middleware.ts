import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string); 
    req.body.user = decoded;

    next();
  } catch (err) {     
    return res.status(401).json({ message: 'Invalid token' });
  }
}