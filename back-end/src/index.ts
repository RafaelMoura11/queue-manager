import App from './app';
import customerRoute from './routes/Customer';
import errorHandler from './middleware/Error';
import userRoute from './routes/User';
import queueRoute from './routes/Queue';

const app = new App();

app.use(customerRoute, '/customers');
app.use(userRoute, '/users');
app.use(queueRoute, '/queues');
app.use(errorHandler);

app.start(Number(3000));