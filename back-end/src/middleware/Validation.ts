import { Request, Response, NextFunction } from 'express';
import bcrypt = require('bcryptjs');
import User from '../database/models/User';
import JWTUtils from '../utils/JWT';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default class LoginValidation {
  static async emailValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const { email } = req.body;
    if (!email) return next({ status: 400, message: 'All fields must be filled' });
    if (!emailRegex.test(email)) {
      return next(
        { status: 401, message: 'Incorrect email or password' },
      );
    }
    const result = await User.findOne(
      { where: { email } },
    );
    if (!result) return next({ status: 401, message: 'Incorrect email or password' });
    req.body.user = result;
    return next();
  }

  static async passwordValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const { password, user: { dataValues: { password: rightPassword, ...user } } } = req.body;
    if (!password) return next({ status: 400, message: 'All fields must be filled' });
    const compare = bcrypt.compareSync(password, rightPassword);
    if (!compare) {
      return next(
        { status: 401, message: 'Incorrect email or password"' },
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
      const userLogin = JWTUtils.verify(token as string);
      req.body.user = userLogin;
      next();
    } catch (e) {
      next({ status: 401, message: 'You are not authorized' });
    }
  }
}