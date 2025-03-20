import express from 'express';
import sendSms from '../controller/smsController.js';

const smsRoute = express.Router();

smsRoute
.post('/', sendSms)

export default smsRoute;