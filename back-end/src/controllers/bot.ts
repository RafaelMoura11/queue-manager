const venom = require('venom-bot');
const express = require('express');

const app = express();

interface MessageRequest {
  to: string;
  message: string;
}

const post = async (req: express.Request<MessageRequest>, res: express.Response) => {
  
  try {
    const { to, message } = req.body;

    if (!to) {
      return res.status(400).json({ error: 'Campo ""numero" vazio' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Campo "mensagem" vazio' });
    }

    const client = await venom.create({
      session: 'mascate',
    });

    await client.sendText(to + '@c.us', message)
      .then(() => res.status(201).json({ message: 'Mensagem enviada' }))
      .catch((error) => {
        console.error('Error ao enviar a mensagem:', error);
        res.status(500).json({ error: 'error ao enviar a mensagem' });
      });
  } catch (error) {
    console.error('Erro inesperado:', error);
    res.status(500).json({ error: 'Erro interno de servidor' }); 
  } 
};

module.exports = post;
