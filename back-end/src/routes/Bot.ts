import express = require('express');
import botController from '../controllers/bot';
const botRouter = express.Router()

botRouter.post('/send-message', botController.post)

export default botRouter;