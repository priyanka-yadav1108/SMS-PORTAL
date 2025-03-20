import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import libraryRouter from '../routes/libraryRoute.js';
import dbConnect from '../db/connection.js';
import groupRouter from '../routes/groupRoute.js';
import contactRouter from '../routes/contactRoute.js';
import messageRouter from '../routes/messageRoute.js';
import smsRoute from '../routes/smsRoute.js';

dbConnect().then().catch(err=>console.log(err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/library',libraryRouter);
app.use('/group', groupRouter);
app.use('/contact', contactRouter);
app.use('/message', messageRouter);
app.use('/sendSms', smsRoute)


app.listen(process.env.PORT, ()=>{console.log('Server Started')})