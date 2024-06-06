import Customer from '../database/models/Customer';
import QueueModel from '../database/models/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(): Promise<QueueInterface[]> {
        const queues: QueueInterface[] = await QueueModel.findAll({
            attributes: ['idQueue', 'peopleQty', 'date',  'cpfCustomer', 'cpfEmployee'],
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
            cpfCustomer: newQueue.cpfCustomer,
            cpfEmployee: newQueue.cpfEmployee
        });
        return true;
    }

    static async update(queueToBeUpdated: QueueInterface) {
        await QueueModel.update({
            peopleQty: queueToBeUpdated.peopleQty,
            date: queueToBeUpdated.date,
            cpfCustomer: queueToBeUpdated.cpfCustomer,
            cpfEmployee: queueToBeUpdated.cpfEmployee
        }, { where: {
            id_queue: queueToBeUpdated.idQueue
        } });
        return true;
    }
}