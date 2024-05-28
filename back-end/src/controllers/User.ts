import { NextFunction, Request, Response } from 'express';
import Login from '../interfaces/Login';
import UserService from '../services/User';
import RegisterInterface from '../interfaces/Register';

export default class UserController {
  static async login(req: Request, res: Response): Promise<Response> {
    const token = UserService.login(req.body as Login);
    return res.status(200).json({ user: req.body.user, token });
  }

  static async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const user = req.body;
        await UserService.register(user as RegisterInterface);
        return res.status(200).json("Empregado registrado!");
    } catch (e) {
        return next({ status: 400, message: "Este empregado já está registrado!" });
    }
  }
}
