import { Request, Response, NextFunction } from 'express';
import ReservationService from '../services/Reservation';
import ReservationInterface from '../interfaces/Reservation';

export default class Reservation {
    static async getAll(_req: Request, res: Response) {
        const reservations: ReservationInterface[] = await ReservationService.getAll();
        return res.status(200).json(reservations);
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        const { nickname, phone, peopleQty, date, isActive, cpfEmployee } = req.body;
            await ReservationService.create({ nickname, phone, peopleQty, date, isActive, cpfEmployee });
            return res.status(201).json("Reserva adicionada com sucesso!");
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        const { idReservation } = req.params;
        const { nickname, phone, peopleQty, date, isActive, cpfEmployee } = req.body;
        try {
            await ReservationService.update({ idReservation: Number(idReservation), nickname, phone, peopleQty, date, isActive, cpfEmployee });
            return res.status(201).json("Reserva atualizada com sucesso!");
        } catch (e) {
            return next({ status: 500, message: "Algo deu errado!" });
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        const { idReservation } = req.params;
        try {
            await ReservationService.delete(Number(idReservation));
            return res.status(200).json("Reserva deletada!");
        } catch (e) {
            return next({ status: 400, message: "A reserva não existe!" })
        }
    }

}