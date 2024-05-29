import QueueModel from '../database/models/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(): Promise<QueueInterface[]> {
        const queues: QueueInterface[] = await QueueModel.findAll({
            attributes: ['idQueue', 'peopleQty', 'date', 'comanda', 'cpfCustomer', 'cpfEmployee']
          });
        return queues;
    }

    static async create(newQueue: QueueInterface) {
        await QueueModel.create({
            peopleQty: newQueue.peopleQty,
            date: newQueue.date,
            comanda: newQueue.comanda,
            cpfCustomer: newQueue.cpfCustomer,
            cpfEmployee: newQueue.cpfEmployee
        });
        return true;
    }

    static async update(queueToBeUpdated: QueueInterface) {
        await QueueModel.update({
            peopleQty: queueToBeUpdated.peopleQty,
            date: queueToBeUpdated.date,
            comanda: queueToBeUpdated.comanda,
            cpfCustomer: queueToBeUpdated.cpfCustomer,
            cpfEmployee: queueToBeUpdated.cpfEmployee
        }, { where: {
            id_queue: queueToBeUpdated.idQueue
        } });
        return true;
    }
}