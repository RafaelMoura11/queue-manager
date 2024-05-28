import App from './app';
import customerRoute from './routes/Customer';
import errorHandler from './middleware/Error';

const app = new App();

app.use(customerRoute, '/customers');
app.use(errorHandler);

app.start(Number(3000));