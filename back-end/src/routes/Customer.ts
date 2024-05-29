import express = require('express');
import CustomerController from '../controllers/Customer';
import LoginValidation from '../middleware/LoginValidation';

const customerRoute = express.Router();

customerRoute.get('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, CustomerController.getAll);
customerRoute.get('/:cpf', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, CustomerController.getByCPF);
customerRoute.post('/', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, CustomerController.create);
customerRoute.put('/:cpf', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, CustomerController.update);
customerRoute.delete('/:cpf', LoginValidation.jwtValidation, LoginValidation.userExistsValidation, CustomerController.delete);

export default customerRoute;
