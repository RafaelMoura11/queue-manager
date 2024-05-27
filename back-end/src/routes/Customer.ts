import express = require('express');
import CustomerController from '../controllers/Customer';

const customerRoute = express.Router();

customerRoute.get('/', CustomerController.getAll);

export default customerRoute;
