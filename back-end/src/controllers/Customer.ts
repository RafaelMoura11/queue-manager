import { Request, Response } from 'express';
import CustomerService from '../services/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(_req: Request, res: Response) {
        const customers: CustomerInterface[] = await CustomerService.getAll();
        return res.status(200).json(customers);
    }

    static async create(req: Request, res: Response) {
        const { cpf, fullName } = req.body;
        await CustomerService.create({ cpf, fullName });
        return res.status(201).json("Cliente registrado com sucesso!");
    }
}