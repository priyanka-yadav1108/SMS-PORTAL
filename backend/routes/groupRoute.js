import express from 'express';
import { addGroup, getGroup } from '../controller/groupController.js';
const groupRouter = express.Router();

groupRouter
.get('/', getGroup)
.post('/', addGroup)

export default groupRouter;