import express = require('express');
import ReservationController from '../controllers/Reservation';
import LoginValidation from '../middleware/LoginValidation';

const reservationRoute = express.Router();

reservationRoute.get('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, ReservationController.getAll);
reservationRoute.post('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, ReservationController.create);
reservationRoute.put('/:idReservation', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, ReservationController.update);
reservationRoute.put('/:idReservation', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, ReservationController.delete);

export default reservationRoute;
