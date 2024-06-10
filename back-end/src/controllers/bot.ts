// const venom = require('venom-bot');
import { Request, Response, NextFunction } from 'express';


interface MessageRequest {
  to: string;
  message: string;
}

class Bot {

  static async post(req: Request, res: Response, next: NextFunction) {
    const { message = 'Senhor(a) Massuello, dirija-se a recepção!'} = req.body as MessageRequest;
    try {
  
      // if (!to) {
      //   return res.status(400).json({ error: 'Campo ""numero" vazio' });
      // }
  
      if (!message) {
        return res.status(400).json({ error: 'Campo "mensagem" vazio' });
      }
  
      return res.status(200).json("Mensagem enviada!");
    } catch (e) {
      return next({ status: 500, message: e });
    } 
  };

}

export default Bot;
