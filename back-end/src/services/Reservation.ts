import ReservationModel from '../database/models/Reservation';
import ReservationInterface from '../interfaces/Reservation';

export default class Reservation {
    static async getAll(): Promise<ReservationInterface[]> {
        const reservations: ReservationInterface[] = await ReservationModel.findAll({
            attributes: ['idReservation', 'peopleQty', 'date', 'cpfCustomer', 'cpfEmployee']
          });
        return reservations;
    }

    static async getById(idReservation: number) {
        const reservation: ReservationInterface | null = await ReservationModel.findOne({ where: { id_reservation: idReservation } });
        return reservation;
    }

    static async create(newReservation: ReservationInterface) {
        await ReservationModel.create({
            peopleQty: newReservation.peopleQty,
            date: newReservation.date,
            cpfCustomer: newReservation.cpfCustomer,
            cpfEmployee: newReservation.cpfEmployee
        });
        return true;
    }

    static async update(reservationToBeUpdated: ReservationInterface) {
        await ReservationModel.update({
            peopleQty: reservationToBeUpdated.peopleQty,
            date: reservationToBeUpdated.date,
            cpfCustomer: reservationToBeUpdated.cpfCustomer,
            cpfEmployee: reservationToBeUpdated.cpfEmployee
        }, { where: {
            id_reservation: reservationToBeUpdated.idReservation
        } });
        return true;
    }

    static async delete(idReservation: number) {
        const customerExists = await this.getById(idReservation);

        if (!customerExists) {
            throw new Error();
        }
        await ReservationModel.destroy({ where: { id_reservation: idReservation } });
        return true;
    }
}