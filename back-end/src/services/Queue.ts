import QueueModel from '../database/models/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(): Promise<QueueInterface[]> {
        const queues: QueueInterface[] = await QueueModel.findAll();
        return queues;
    }

    static async create(newQueue: QueueInterface) {
        await QueueModel.create({
            people_qty: newQueue.peopleQty,
            date: newQueue.date,
            comanda: newQueue.comanda,
            cpf_customer: newQueue.cpfCustomer,
            cpf_employee: newQueue.cpfEmployee
        });
        return true;
    }

    static async update(queueToBeUpdated: QueueInterface) {
        await QueueModel.update({
            people_qty: queueToBeUpdated.peopleQty,
            date: queueToBeUpdated.date,
            comanda: queueToBeUpdated.comanda,
            cpf_customer: queueToBeUpdated.cpfCustomer,
            cpf_employee: queueToBeUpdated.cpfEmployee
        }, { where: {
            id_queue: queueToBeUpdated.idQueue
        } });
        return true;
    }
}