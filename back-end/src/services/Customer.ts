import CustomerModel from '../database/models/Customer';
import CustomerPhoneModel from '../database/models/CustomerPhone';
import CustomerInterface from '../interfaces/Customer';

export default class Customer {
    static async getAll(): Promise<CustomerInterface[]> {
        const customers: CustomerInterface[] = await CustomerModel.findAll({
            include: [{
                model: CustomerPhoneModel,
                as: 'phones',
                attributes: { exclude: ['cpf_customer'] }
            }],
        });
        return customers;
    }

    static async create(newCustomer: CustomerInterface) {
        await CustomerModel.create({
            cpf: newCustomer.cpf,
            fullName: newCustomer.fullName
        });
        return true;
    }
}
