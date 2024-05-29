import { Request, Response, NextFunction } from 'express';
import QueueService from '../services/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(_req: Request, res: Response) {
        const queues: QueueInterface[] = await QueueService.getAll();
        return res.status(200).json(queues);
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        const { peopleQty, date, comanda, cpfCustomer, cpfEmployee } = req.body;
        try {
            await QueueService.create({ peopleQty, date, comanda, cpfCustomer, cpfEmployee });
            return res.status(201).json("Fila adicionada com sucesso!");
        } catch (e) {
            return next({ status: 500, message: "Algo deu errado!" });
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        const { idQueue } = req.params;
        const { peopleQty, date, comanda, cpfCustomer, cpfEmployee } = req.body;
        try {
            await QueueService.update({ idQueue: Number(idQueue), peopleQty, date, comanda, cpfCustomer, cpfEmployee });
            return res.status(201).json("Cliente atualizado com sucesso!");
        } catch (e) {
            return next({ status: 500, message: "Algo deu errado!" });
        }
    }

}