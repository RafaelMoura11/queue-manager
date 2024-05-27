import { Request, Response } from 'express';
import CustomerService from '../services/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async findAll(_req: Request, res: Response) {
        const customers: CustomerInterface[] = await CustomerService.getAll();
        return res.status(200).json(customers);
    }
}