import express = require('express');
import MessageController from '../controllers/Message';
import LoginValidation from '../middleware/LoginValidation';

const messageRoute = express.Router();

messageRoute.get('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, MessageController.getAll);
messageRoute.post('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, MessageController.create);

export default messageRoute;
