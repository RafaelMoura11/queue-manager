import QueueModel from '../database/models/Queue';
import QueueInterface from '../interfaces/Queue';

export default class Queue {
    static async getAll(): Promise<QueueInterface[]> {
        const queues: QueueInterface[] = await QueueModel.findAll({
            attributes: ['idQueue', 'nickname', 'phone', 'peopleQty', 'date', 'isActive', 'cpfEmployee'],
            where: {
                isActive: true
            }
          });
        return queues;
    }

    static async create(newQueue: QueueInterface) {
        await QueueModel.create({
            nickname: newQueue.nickname,
            phone: newQueue.phone,
            peopleQty: newQueue.peopleQty,
            date: newQueue.date,
            isActive: newQueue.isActive,
            cpfEmployee: newQueue.cpfEmployee
        });
        return true;
    }

    static async update(queueToBeUpdated: QueueInterface) {
        await QueueModel.update({
            nickname: queueToBeUpdated.nickname,
            phone: queueToBeUpdated.phone,
            peopleQty: queueToBeUpdated.peopleQty,
            date: queueToBeUpdated.date,
            isActive: queueToBeUpdated.isActive,
            cpfEmployee: queueToBeUpdated.cpfEmployee
        }, { where: {
            id_queue: queueToBeUpdated.idQueue
        } });
        return true;
    }
}