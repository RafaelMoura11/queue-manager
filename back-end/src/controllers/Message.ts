import { Request, Response, NextFunction } from 'express';
import MessageService from '../services/Message';
import MessageInterface from '../interfaces/Message';

export default class Queue {
    static async getAll(_req: Request, res: Response) {
        const messages: MessageInterface[] = await MessageService.getAll();
        return res.status(200).json(messages);
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        const { message, idUser } = req.body;
        try {
            await MessageService.create({ message, idUser });
            return res.status(201).json("Mensagem adicionada com sucesso!");
        } catch (e) {
            return next({ status: 500, message: "Algo deu errado!" });
        }
    }
}