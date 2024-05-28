import { NextFunction, Request, Response } from 'express';
import Login from '../interfaces/Login';
import UserService from '../services/User';
import RegisterInterface from '../interfaces/Register';

export default class UserController {
  static async login(req: Request, res: Response): Promise<Response> {
    const token = UserService.login(req.body as Login);
    return res.status(200).json({ user: req.body.user, token });
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    UserService.register(user as RegisterInterface);
    return res.status(200).json("Empregado registrado!");
  }
}
