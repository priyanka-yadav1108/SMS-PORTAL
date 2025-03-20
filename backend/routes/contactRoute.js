import express from 'express';
import { addContact, getContact, getContactById } from '../controller/contactController.js';

const contactRouter = express.Router();

contactRouter
.get('/', getContact)
.get('/:groupId', getContactById)
.post('/', addContact);

export default contactRouter;

