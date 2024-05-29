import { Request, Response, NextFunction } from 'express';
import bcrypt = require('bcryptjs');
import User from '../database/models/User';
import JWTUtils from '../utils/JWT';
import { JwtPayload } from 'jsonwebtoken';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default class LoginValidation {
  static async emailValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const { email } = req.body;
    if (!email) return next({ status: 400, message: 'Todos os campos devem ser preenchidos!' });
    if (!emailRegex.test(email)) {
      return next(
        { status: 401, message: 'Email e/ou senha incorreto(s)!' },
      );
    }
    const result = await User.findOne(
      { where: { email } },
    );
    if (!result) return next({ status: 401, message: 'Email e/ou senha incorreto(s)!' });
    req.body.user = result;
    return next();
  }

  static async passwordValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const { password, user: { dataValues: { password: rightPassword, ...user } } } = req.body;
    if (!password) return next({ status: 400, message: 'Todos os campos devem ser preenchidos!' });
    const compare = bcrypt.compareSync(password, rightPassword);
    if (!compare) {
      return next(
        { status: 401, message: 'Email e/ou senha incorreto(s)!"' },
      );
    }
    req.body.user = user;
    return next();
  }

  static async jwtValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const token = req.headers.authorization;
    try {
      const userLogin = JWTUtils.verify(token as string) as JwtPayload;
      const result = await User.findOne(
        { where: { email: userLogin.email } },
      );
      if (!result) {
        throw new Error();
      }
      req.body.user = userLogin;
      next();
    } catch (e) {
      next({ status: 401, message: 'Você não está autorizado!' });
    }
  }
}