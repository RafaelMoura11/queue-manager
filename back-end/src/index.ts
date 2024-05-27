import App from './app';
import customerRoute from './routes/Customer';

const app = new App();

app.use(customerRoute, '/customers');

app.start(Number(3000));