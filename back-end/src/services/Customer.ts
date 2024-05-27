import CustomerModel from '../database/models/Customer';
import CustomerPhoneModel from '../database/models/CustomerPhone';

export default class Customer {
    static async getAll() {
        const customers = await CustomerModel.findAll({
            include: [{
                model: CustomerPhoneModel,
                as: 'phones',
                attributes: { exclude: ['cpf_customer'] }
            }],
        });
        return customers;
    }
}
