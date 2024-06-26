import express = require('express');
import QueueController from '../controllers/Queue';
import LoginValidation from '../middleware/LoginValidation';

const queueRoute = express.Router();

queueRoute.get('/', QueueController.getAll);
queueRoute.post('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, QueueController.create);
queueRoute.put('/:idQueue', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, QueueController.update);

export default queueRoute;
