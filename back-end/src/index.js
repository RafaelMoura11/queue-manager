import App from './app';
import userRoute from './routes/User';
import queueRoute from './routes/Queue';
import errorHandler from './middleware/Error';
import reservationRoute from './routes/Reservation';
import messageRoute from './routes/Message';
const venom = require('venom-bot');
const express = require('express');

const app = new App();
app.app.use(express.json());

venom
  .create({
    session: 'Mascote', // nome da sessão
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const start = (client) => {
  app.post('/send-message', async (req, res) => {
    const { message } = req.body;
    await client.sendText('5581997720800@c.us', message);
    return res.status(201).json('Mensagem enviada');
  });
};

app.use(userRoute, '/users');
app.use(queueRoute, '/queues');
app.use(reservationRoute, '/reservations');
app.use(messageRoute, '/messages');

app.use(errorHandler);

const PORT = 3001;
app.start(PORT);
