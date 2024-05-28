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

    static async update(customerToBeUpdated: CustomerInterface) {
        await CustomerModel.update({
            fullName: customerToBeUpdated.fullName,
            phone: customerToBeUpdated.phone
        }, { where: {
            cpf: customerToBeUpdated.cpf
        } });
        return true;
    }
}
