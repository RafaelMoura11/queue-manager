import { Request, Response } from 'express';
import CustomerService from '../services/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(_req: Request, res: Response) {
        const customers: CustomerInterface[] = await CustomerService.getAll();
        return res.status(200).json(customers);
    }

    static async create(req: Request, res: Response) {
        const { cpf, fullName, phone } = req.body;
        await CustomerService.create({ cpf, fullName, phone });
        return res.status(201).json("Cliente registrado com sucesso!");
    }

    static async update(req: Request, res: Response) {
        const { cpf } = req.params;
        const { fullName, phone } = req.body;
        await CustomerService.update({ cpf, fullName, phone });
        return res.status(201).json("Cliente atualizado com sucesso!");
    }
}