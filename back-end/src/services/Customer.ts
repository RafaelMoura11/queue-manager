import CustomerModel from '../database/models/Customer';

export default class Customer {
    static async getAll() {
        const customers = await CustomerModel.findAll();
        return customers;
    }
}
