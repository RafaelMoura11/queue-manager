import MessageModel from '../database/models/Message';
import MessageInterface from '../interfaces/Message';

export default class Message {
    static async getAll(): Promise<MessageInterface[]> {
        const messages: MessageInterface[] = await MessageModel.findAll({
            attributes: ['idMessage', 'message', 'idUser']
          });
        return messages;
    }

    static async create(newMessage: MessageInterface) {
        await MessageModel.create({
            message: newMessage.message,
            idUser: newMessage.idUser
        });
        return true;
    }
}