import * as jwt from 'jsonwebtoken';
import LoginInterface from '../interfaces/Login';

const SECRET = 'secret';

export default class JWTUtils {
  static sign = (data: LoginInterface): string => (
    jwt.sign({ ...data }, SECRET, { expiresIn: '7d', algorithm: 'HS256' })
  );

  static verify = (token: string) => jwt.verify(token, SECRET);
}