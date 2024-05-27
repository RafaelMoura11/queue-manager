const controllerEmployee = require('./controllers/Employee-controller');
const router = require('./index');

router.get('/employees', controllerEmployee.getAllEmployees);
router.get('/employees/:id', controllerEmployee.getIdEmployee); 
router.post('/employees', controllerEmployee.createEmployee); 
router.put('employees/:id', controllerEmployee.editEmployee)
router.delete('/eployee/:id', controllerEmployee.deleteEmployee)

module.exports = router;
