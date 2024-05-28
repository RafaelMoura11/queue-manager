import CustomerModel from '../database/models/Customer';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(): Promise<CustomerInterface[]> {
        const customers: CustomerInterface[] = await CustomerModel.findAll();
        return customers;
    }

    static async getByCPF(cpf: string) {
        const customer: CustomerInterface | null = await CustomerModel.findOne({ where: { cpf } });
        return customer;
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
        const customerExists = await this.getByCPF(customerToBeUpdated.cpf);

        if (!customerExists) {
            throw new Error();
        }

        await CustomerModel.update({
            fullName: customerToBeUpdated.fullName,
            phone: customerToBeUpdated.phone
        }, { where: {
            cpf: customerToBeUpdated.cpf
        } });
        return true;
    }

    static async delete(cpf: string) {
        const customerExists = await this.getByCPF(cpf);

        if (!customerExists) {
            throw new Error();
        }
        await CustomerModel.destroy({ where: { cpf } });
        return true;
    }
}
