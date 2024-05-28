import App from './app';
import customerRoute from './routes/Customer';
import errorHandler from './middleware/Error';
import userRoute from './routes/User';

const app = new App();

app.use(customerRoute, '/customers');
app.use(userRoute, '/users');
app.use(errorHandler);

app.start(Number(3000));