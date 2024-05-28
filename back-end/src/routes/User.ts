import express = require('express');
import UserController from '../controllers/User';
import LoginValidation from '../middleware/LoginValidation';

const userRoute = express.Router();

userRoute.post('/login', LoginValidation.emailValidation, LoginValidation.passwordValidation, UserController.login);
userRoute.post('/register', UserController.register);

export default userRoute;
