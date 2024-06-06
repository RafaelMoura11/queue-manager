import Customer from '../database/models/Customer';
import QueueModel from '../database/models/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(): Promise<QueueInterface[]> {
        const queues: QueueInterface[] = await QueueModel.findAll({
            attributes: ['idQueue', 'peopleQty', 'date', 'isActive',  'cpfCustomer', 'cpfEmployee'],
            include: [{
                model: Customer,
                attributes: ['fullName'],
                as: 'customer',
                required: false,
              }]
          });
        return queues;
    }

    static async create(newQueue: QueueInterface) {
        await QueueModel.create({
            peopleQty: newQueue.peopleQty,
            date: newQueue.date,
            isActive: newQueue.isActive,
            cpfCustomer: newQueue.cpfCustomer,
            cpfEmployee: newQueue.cpfEmployee
        });
        return true;
    }

    static async update(queueToBeUpdated: QueueInterface) {
        await QueueModel.update({
            peopleQty: queueToBeUpdated.peopleQty,
            date: queueToBeUpdated.date,
            isActive: queueToBeUpdated.isActive,
            cpfCustomer: queueToBeUpdated.cpfCustomer,
            cpfEmployee: queueToBeUpdated.cpfEmployee
        }, { where: {
            id_queue: queueToBeUpdated.idQueue
        } });
        return true;
    }
}