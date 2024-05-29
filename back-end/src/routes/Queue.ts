import express = require('express');
import QueueController from '../controllers/Queue';
import LoginValidation from '../middleware/LoginValidation';

const queueRoute = express.Router();

queueRoute.get('/', QueueController.getAll);
queueRoute.post('/', LoginValidation.jwtValidation, QueueController.create);
queueRoute.put('/:cpf', LoginValidation.jwtValidation, QueueController.update);

export default queueRoute;
