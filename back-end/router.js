const controllerGet = require('./controllers/user-controller');
const router = require('./index');

router.get('/users',controllerGet.get)

