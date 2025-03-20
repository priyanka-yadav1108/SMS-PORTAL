import express from 'express';
import { getMessage, addMessage, getMessageById } from '../controller/messageController.js';

const messageRouter = express.Router();

messageRouter
.get('/', getMessage)
.get('/:libraryId', getMessageById)
.post('/', addMessage);

export default messageRouter;