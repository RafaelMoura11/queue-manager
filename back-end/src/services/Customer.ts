import CustomerModel from '../database/models/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(): Promise<CustomerInterface[]> {
        const customers: CustomerInterface[] = await CustomerModel.findAll();
        return customers;
    }

    static async create(newCustomer: CustomerInterface) {
        await CustomerModel.create({
            cpf: newCustomer.cpf,
            fullName: newCustomer.fullName,
            phone: newCustomer.phone
        });
        return true;
    }
}
