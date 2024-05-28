import express = require('express');
import UserController from '../controllers/User';

const userRoute = express.Router();

userRoute.post('/login', UserController.login);
userRoute.post('/register', UserController.register);

export default userRoute;
