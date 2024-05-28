import express = require('express');
import CustomerController from '../controllers/Customer';

const customerRoute = express.Router();

customerRoute.get('/', CustomerController.getAll);
customerRoute.get('/:cpf', CustomerController.getByCPF);
customerRoute.post('/', CustomerController.create);
customerRoute.put('/:cpf', CustomerController.update);
customerRoute.delete('/:cpf', CustomerController.delete);

export default customerRoute;
