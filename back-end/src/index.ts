import App from './app';
import customerRoute from './routes/Customer';
import userRoute from './routes/User';
import queueRoute from './routes/Queue';
import errorHandler from './middleware/Error';
import reservationRoute from './routes/Reservation';
import messageRoute from './routes/Message';

const app = new App();


app.use(customerRoute, '/customers');
app.use(userRoute, '/users');
app.use(queueRoute, '/queues');
app.use(reservationRoute, '/reservations');
app.use(messageRoute, '/messages');

app.use(errorHandler);

const PORT = 3000;
app.start(PORT);
