import express = require('express');
import CustomerController from '../controllers/Customer';
import LoginValidation from '../middleware/LoginValidation';

const customerRoute = express.Router();

customerRoute.get('/', CustomerController.getAll);
customerRoute.get('/:cpf', LoginValidation.jwtValidation, CustomerController.getByCPF);
customerRoute.post('/', LoginValidation.jwtValidation, CustomerController.create);
customerRoute.put('/:cpf', LoginValidation.jwtValidation, CustomerController.update);
customerRoute.delete('/:cpf', LoginValidation.jwtValidation, CustomerController.delete);

export default customerRoute;
