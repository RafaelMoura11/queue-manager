import { Request, Response, NextFunction } from 'express';
import CustomerService from '../services/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(_req: Request, res: Response) {
        const customers: CustomerInterface[] = await CustomerService.getAll();
        return res.status(200).json(customers);
    }

    static async getByCPF(req: Request, res: Response, next: NextFunction) {
        const { cpf } = req.params;
        const customer: CustomerInterface | null = await CustomerService.getByCPF(cpf);
        if (customer) {
            return res.status(200).json(customer);
        } else {
            return next({ status: 404, message: "Cliente não encontrado!" });
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        const { cpf, fullName, phone } = req.body;
        try {
            await CustomerService.create({ cpf, fullName, phone });
            return res.status(201).json("Cliente registrado com sucesso!");
        } catch (e) {
            return next({ status: 400, message: "O cliente já está registrado!" });
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        const { cpf } = req.params;
        const { fullName, phone } = req.body;
        try {
            await CustomerService.update({ cpf, fullName, phone });
            return res.status(201).json("Cliente atualizado com sucesso!");
        } catch (e) {
            return next({ status: 400, message: "O cliente não existe!" });
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        const { cpf } = req.params;
        try {
            await CustomerService.delete(cpf);
            return res.status(200).json("Cliente deletado!");
        } catch (e) {
            return next({ status: 400, message: "O cliente não existe!" })
        }
    }
}